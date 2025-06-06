import { LaunchProps, showToast, Toast } from "@raycast/api";
import { openUrlWithToasts } from "./utils";

// Define the structure of arguments your command expects
interface CommandArguments {
  bookName: string; // This must match the "name" field in package.json arguments
}

export default async function Command(props: LaunchProps<{ arguments: CommandArguments }>) {
  const { bookName } = props.arguments;

  if (!bookName) {
    await showToast({
      style: Toast.Style.Failure,
      title: "No Book Name Provided",
      message: "Please enter a Book name.",
    });
    return;
  }

  const urlToOpen = `https://github.com/kognitos/book-${bookName}`;

  await openUrlWithToasts(urlToOpen, "Opening Book Repo...");
}
