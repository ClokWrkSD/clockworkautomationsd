// Send www.clockworkautomationsd.com to the bare domain with a permanent (301) redirect,
// so Google only ever sees one version of each page.
export async function onRequest({ request, next }) {
  const url = new URL(request.url);
  if (url.hostname === "www.clockworkautomationsd.com") {
    url.hostname = "clockworkautomationsd.com";
    return Response.redirect(url.toString(), 301);
  }
  return next();
}
