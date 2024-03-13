import action from "./actions";

export async function GET(request: Request) {
  await action();

  // const validTrigger =
  //   process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ===
  //   request.headers.get("sanity-project-id");
  // if (validTrigger) {
  //   //  Logic to Revalidate Cache
  //   console.log("Revalidation Triggered");

  //   action();
  // }
  return Response.json({
    message: "Welcome to Revalidate trigger !",
  });
}
