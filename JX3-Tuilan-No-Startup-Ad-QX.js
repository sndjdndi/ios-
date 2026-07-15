const body = {
  code: 0,
  msg: "success",
  tag: "/internal/ugc/pop-up-window/query-by-game",
  data: null,
};

$done({
  status: "HTTP/1.1 200 OK",
  headers: { "Content-Type": "application/json; charset=utf-8" },
  body: JSON.stringify(body),
});
