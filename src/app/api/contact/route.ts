import { NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import Contact from "@/models/Contact";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    // Validate request data
    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, message: "Please provide all required fields" },
        { status: 400 }
      );
    }

    // Connect to the database
    await connectDB();

    // Create a new contact submission
    const newContact = await Contact.create({
      name,
      email,
      message,
    });

    return NextResponse.json(
      { 
        success: true, 
        message: "Message sent successfully", 
        data: newContact 
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error in contact submission:", error);
    return NextResponse.json(
      { success: false, message: "Something went wrong" },
      { status: 500 }
    );
  }
} 