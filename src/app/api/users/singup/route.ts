import { NextResponse } from "next/server";

export async function POST(request: Request) {
	let name = "";
	let email = "";
	let password = "";

	try {
		const contentType = request.headers.get("content-type") ?? "";

		if (contentType.includes("application/json")) {
			const body = await request.json();
			name = typeof body.name === "string" ? body.name.trim() : "";
			email = typeof body.email === "string" ? body.email.trim() : "";
			password = typeof body.password === "string" ? body.password : "";
		} else {
			const formData = await request.formData();
			name = typeof formData.get("name") === "string" ? String(formData.get("name")).trim() : "";
			email = typeof formData.get("email") === "string" ? String(formData.get("email")).trim() : "";
			password = typeof formData.get("password") === "string" ? String(formData.get("password")) : "";
		}
	} catch {
		return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
	}

	if (!name || !email || !password) {
		return NextResponse.json(
			{ error: "Name, email, and password are required." },
			{ status: 400 },
		);
	}

	if (!email.includes("@")) {
		return NextResponse.json({ error: "Enter a valid email address." }, { status: 400 });
	}

	if (password.length < 8) {
		return NextResponse.json(
			{ error: "Password must be at least 8 characters." },
			{ status: 400 },
		);
	}

	return NextResponse.json(
		{ message: "Signup request received. User storage is not configured yet." },
		{ status: 501 },
	);
}
