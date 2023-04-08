class ToolProvider extends D1Type {
  tool_provider_id: number;
  oauth_secret: string;
  oauth_key: string;

  constructor(
    tool_provider_id: number,
    oauth_secret: string,
    oauth_key: string
  ) {
    super();
    this.tool_provider_id = tool_provider_id;
    this.oauth_secret = oauth_secret;
    this.oauth_key = oauth_key;
  }
}
