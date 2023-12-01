import { NextResponse } from "next/server";
import { writeFile } from "fs/promises";
export const POST = async (request) => {
  const data = await request.formData();
  console.log(data);
  const file = data.get("file");
  if (!file) {
    return NextResponse.json({
      messgae: "No image Found",
      success: false,
    });
  }
  const bytedata = await file.arrayBuffer();
  const buffer = Buffer.from(bytedata);
  const path = `./public/${file.name}`;
  await writeFile(path, buffer);

  return NextResponse.json({
    message: "File Uploaded Successfully",
    success: true,
    
  });
};
