export const url = {
  // baseUrl : "http://47.92.101.205:3000/api",
  baseUrl : "http://localhost:3000/api",
  // nginx : "http://47.92.101.205:8089",
  nginx : "http://localhost:8089",
}

export const api = {
  signin : "/user/signin",
  signup : "/user/signup",

  uploadImage : "/file/uploadImage",
  imageManager : "/file/imageManager",
  getImages : "/file/getImages",


  addImageTags : "/tags/addImageTags",
  getImageTags : "/tags/getImageTags",

  getPostList : "/post/getPostList",
  addPost : "/protect/addPost",
  getPost : "/post/getPost"
}
