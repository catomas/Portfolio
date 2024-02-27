import { EmailTemplate } from "@/components/email-template";
import { Resend } from "resend";

const resesnd = new Resend(process.env.RESEND_API_KEY);
export async function POST(req: Request) {
  try {
    const dataForm = await req.json();
    try {
      const data = await resesnd.emails.send({
        from: "Acme <onboarding@resend.dev>",
        to: ["juancamiloecheverrisalazar@gmail.com"],
        subject: "Portfolio Contact",
        react: EmailTemplate({
          firstName: dataForm.username,
          email: dataForm.email,
          message: dataForm.message,
        }),
        text: `Name: ${dataForm.username} \n Email: ${dataForm.email} \n Message: ${dataForm.message}`,
      });
      return Response.json(data);
    } catch (error) {
      return Response.json({ error });
    }
  } catch (error) {
    return Response.json({ error });
  }
}
