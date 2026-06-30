import { registerUser } from "@/modules/auth/auth.services";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (request: NextRequest) => {
  try {
    const { name, email, password } = await request.json();

    const user = registerUser({ name, email, password });

    return NextResponse.json(
      {
        success: true,
        error: null,
        message: "/POST for API Route /API/(AUTH)/REGISTER is WORKING!!!",
        user,
      },
      { status: 200 },
    );
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : "Unknown Error Occured.";
    const errorName =
      error instanceof Error ? error.name : "Unknown Error Name Occured.";

    if (errorName) {
      return;
    }

    return NextResponse.json(
      { success: false, error: true, message: errorMessage },
      { status: 500 },
    );
  }
};
