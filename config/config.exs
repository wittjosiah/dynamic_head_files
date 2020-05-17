# This file is responsible for configuring your application
# and its dependencies with the aid of the Mix.Config module.
#
# This configuration file is loaded before any dependency and
# is restricted to this project.

# General application configuration
use Mix.Config

config :dynamic_head_files,
  ecto_repos: [DynamicHeadFiles.Repo]

# Configures the endpoint
config :dynamic_head_files, DynamicHeadFilesWeb.Endpoint,
  url: [host: "localhost"],
  secret_key_base: "WAABFeJqdUe/vCparsxCPJ0O1brn6DLXpBKLsxapf9tSLikeMD6U7PqgBTnDiA3q",
  render_errors: [view: DynamicHeadFilesWeb.ErrorView, accepts: ~w(html json), layout: false],
  pubsub_server: DynamicHeadFiles.PubSub,
  live_view: [signing_salt: "1lZ7x92Z"]

# Configures Elixir's Logger
config :logger, :console,
  format: "$time $metadata[$level] $message\n",
  metadata: [:request_id]

# Use Jason for JSON parsing in Phoenix
config :phoenix, :json_library, Jason

# Import environment specific config. This must remain at the bottom
# of this file so it overrides the configuration defined above.
import_config "#{Mix.env()}.exs"
