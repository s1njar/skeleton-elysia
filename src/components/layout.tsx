import { PropsWithChildren } from "@kitajs/html";

type LayoutProps = {
  title?: string;
};

export const Layout = (props: LayoutProps & PropsWithChildren) => {
  const { title = "Elysia" } = props;

  return (
    "<!DOCTYPE html>" +
    (
      <html lang="en" class="dark">
        <head>
          <meta charset="UTF-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <link
            rel="icon"
            type="image/x-icon"
            href="/public/favicon.ico"
          ></link>
          <title>{title}</title>
          <link href="/public/globals.css" rel="stylesheet" />
          <script
            src="https://unpkg.com/htmx.org@1.9.11"
            integrity="sha384-0gxUXCCR8yv9FM2b+U3FDbsKthCI66oH5IA9fHppQq9DDMHuMauqq1ZHBpJxQ0J0"
            crossorigin="anonymous"
          ></script>
        </head>
        <body>{props.children}</body>
      </html>
    )
  );
};
