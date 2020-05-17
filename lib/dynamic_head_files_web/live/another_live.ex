defmodule DynamicHeadFilesWeb.AnotherLive do
  use DynamicHeadFilesWeb, :live_view

  @impl true
  def mount(_params, _session, socket) do
    {:ok, socket}
  end

  @impl true
  def handle_event("script_loaded", _, socket) do
    {:noreply, assign(socket, :loaded, true)}
  end
end
