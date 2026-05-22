import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const isDev = process.env.NODE_ENV !== "production";

  try {
    const { email, name } = await req.json();

    if (!email || !email.includes("@")) {
      return NextResponse.json(
        { error: "Bitte gib eine gültige E-Mail-Adresse ein." },
        { status: 400 }
      );
    }

    const apiKey = process.env.BREVO_API_KEY;
    const listId = Number(process.env.BREVO_LIST_ID) || 6;

    if (!apiKey) {
      console.error("[newsletter] BREVO_API_KEY missing in environment");
      return NextResponse.json(
        { error: "Newsletter-Service nicht konfiguriert." },
        { status: 500 }
      );
    }

    const response = await fetch("https://api.brevo.com/v3/contacts", {
      method: "POST",
      headers: {
        "accept": "application/json",
        "content-type": "application/json",
        "api-key": apiKey,
      },
      body: JSON.stringify({
        email,
        attributes: {
          VORNAME: name || "",
        },
        listIds: [listId],
        updateEnabled: true,
      }),
    });

    if (response.status === 201 || response.status === 204) {
      return NextResponse.json({ success: true });
    }

    const rawBody = await response.text();
    let data: { code?: string; message?: string } = {};
    try {
      data = JSON.parse(rawBody);
    } catch {
      // non-JSON response — keep rawBody for logging
    }

    console.error("[newsletter] Brevo error", {
      status: response.status,
      code: data.code,
      message: data.message,
      body: rawBody,
      listId,
    });

    if (data.code === "duplicate_parameter") {
      return NextResponse.json({ success: true, duplicate: true });
    }

    return NextResponse.json(
      {
        error: "Anmeldung fehlgeschlagen. Bitte versuche es später erneut.",
        ...(isDev && {
          debug: {
            status: response.status,
            code: data.code,
            message: data.message,
            body: rawBody,
          },
        }),
      },
      { status: 500 }
    );
  } catch (err) {
    console.error("[newsletter] Unexpected error", err);
    return NextResponse.json(
      {
        error: "Ein Fehler ist aufgetreten.",
        ...(isDev && { debug: String(err) }),
      },
      { status: 500 }
    );
  }
}
