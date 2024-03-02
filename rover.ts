
//this worker grabs any file from r2 just place the name at end of worker /filename.html

// src/index.ts
var src_default = {
  async fetch(request, env) {
    const url = new URL(request.url);
    const key = url.pathname.slice(1);
    const object = await env.MY_BUCKET.get(key);
    if (object === null) {
      return new Response("Object Not Found", { status: 404 });
    }
    const headers = new Headers();
    object.writeHttpMetadata(headers);
    headers.set("etag", object.httpEtag);
    return new Response(object.body, {
      headers
    });
  }
};
export {
  src_default as default
};
//# sourceMappingURL=index.js.map
