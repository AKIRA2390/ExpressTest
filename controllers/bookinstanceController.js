const BookInstance = require("../models/bookinstance");
const asyncHandler = require("express-async-handler");

// すべてのBookInstancesのリストを表示します。
exports.bookinstance_list = asyncHandler(async (req, res, next) => {
    res.send("NOT IMPLEMENTED: BookInstance list");
});

// 特定のBookInstanceの詳細ページを表示します。
exports.bookinstance_detail = asyncHandler(async (req, res, next) => {
    res.send(`NOT IMPLEMENTED: BookInstance detail: ${req.params.id}`);
});

// GETリクエスト時にBookInstance作成フォームを表示します。
exports.bookinstance_create_get = asyncHandler(async (req, res, next) => {
    res.send("NOT IMPLEMENTED: BookInstance create GET");
});

// POSTリクエスト時にBookInstanceを作成します。
exports.bookinstance_create_post = asyncHandler(async (req, res, next) => {
    res.send("NOT IMPLEMENTED: BookInstance create POST");
});

// GETリクエスト時にBookInstance削除フォームを表示します。
exports.bookinstance_delete_get = asyncHandler(async (req, res, next) => {
    res.send("NOT IMPLEMENTED: BookInstance delete GET");
});

// POSTリクエスト時にBookInstanceを削除します。
exports.bookinstance_delete_post = asyncHandler(async (req, res, next) => {
    res.send("NOT IMPLEMENTED: BookInstance delete POST");
});

// GETリクエスト時にBookInstance更新フォームを表示します。
exports.bookinstance_update_get = asyncHandler(async (req, res, next) => {
    res.send("NOT IMPLEMENTED: BookInstance update GET");
});

// POSTリクエスト時にbookinstanceを更新します。
exports.bookinstance_update_post = asyncHandler(async (req, res, next) => {
    res.send("NOT IMPLEMENTED: BookInstance update POST");
});
