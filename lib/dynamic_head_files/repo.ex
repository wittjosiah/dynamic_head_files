defmodule DynamicHeadFiles.Repo do
  use Ecto.Repo,
    otp_app: :dynamic_head_files,
    adapter: Ecto.Adapters.Postgres
end
