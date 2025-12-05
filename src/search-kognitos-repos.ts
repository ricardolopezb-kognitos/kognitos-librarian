import { LaunchProps, showToast, Toast } from "@raycast/api";
import { openUrlWithToasts } from "./utils";

// Define the structure of arguments your command expects
interface CommandArguments {
  repoName: string; // This must match the "name" field in package.json arguments
}

export default async function Command(props: LaunchProps<{ arguments: CommandArguments }>) {
  let { repoName } = props.arguments;

  if (!repoName) {
    await showToast({
      style: Toast.Style.Failure,
      title: "No Book Name Provided",
      message: "Please enter a Book name.",
    });
    return;
  }
  
  if (repoName === "transwarp") {
    repoName = "voyager-transwarp";
  }

  const urlToOpen = `https://github.com/kognitos/${repoName}`;

  await openUrlWithToasts(urlToOpen, "Opening Kognitos Repo...");
}
