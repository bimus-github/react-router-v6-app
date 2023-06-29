import { redirect } from "react-router-dom";

export const contactAction = async ({ request }) => {
  const data = await request.formData();

  const submission = {
    email: data.get("email"),
    message: data.get("message"),
  };

  console.log(submission);

  // send your post request

  if (submission.message.length < 10) {
    return { error: "Message must be over 10 chars long." };
  }

  // redirect the user
  return redirect("/");
};
