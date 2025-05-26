import { open, showToast, Toast } from "@raycast/api";

export async function openUrlWithToasts(urlToOpen: string, loadingTitle: string) {
  try {
    await showToast({
      style: Toast.Style.Animated,
      title: loadingTitle,
      message: urlToOpen,
    });

    await open(urlToOpen);
  } catch (error) {
    console.error("Failed to open URL:", error);
    await showToast({
      style: Toast.Style.Failure,
      title: "Failed to Open URL",
      message: error instanceof Error ? error.message : String(error),
    });
  }
}
