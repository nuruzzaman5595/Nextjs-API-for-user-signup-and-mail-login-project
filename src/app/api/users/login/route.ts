import { NextResponse } from "next/server";

export async function POST(request: Request) {
	let email = "";
	let password = "";

	try {
		const contentType = request.headers.get("content-type") ?? "";

		if (contentType.includes("application/json")) {
			const body = await request.json();
			email = typeof body.email === "string" ? body.email.trim() : "";
			password = typeof body.password === "string" ? body.password : "";
		} else {
			const formData = await request.formData();
			email = typeof formData.get("email") === "string" ? String(formData.get("email")).trim() : "";
			password = typeof formData.get("password") === "string" ? String(formData.get("password")) : "";
		}
	} catch {
		return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
	}

	if (!email || !password) {
		return NextResponse.json(
			{ error: "Email and password are required." },
			{ status: 400 },
		);
	}

	if (!email.includes("@")) {
		return NextResponse.json({ error: "Enter a valid email address." }, { status: 400 });
	}

	return NextResponse.json(
		{ message: "Login request received. User authentication is not configured yet." },
		{ status: 501 },
	);
}
