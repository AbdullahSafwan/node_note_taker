// Auto-generated from Postman collection: note_taker
// Generated on: 2025-12-20T20:17:18.922Z

export const postmanSwagger = {
  paths: {
  "/auth/signup": {
    "post": {
      "tags": [
        "Authentication"
      ],
      "summary": "signup",
      "description": "signup",
      "requestBody": {
        "required": true,
        "content": {
          "application/json": {
            "schema": {
              "type": "object",
              "example": {
                "firstName": "John",
                "phoneNumber": "03001234567",
                "lastName": "Doe",
                "email": "johndoe@maildrop.cc",
                "password": "StronkPW@619"
              }
            }
          }
        }
      },
      "responses": {
        "201": {
          "description": "signup",
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "example": {
                  "success": true,
                  "data": {
                    "id": 2,
                    "email": "johndoe@maildrop.cc",
                    "firstName": "John",
                    "lastName": "Doe",
                    "createdAt": "2025-12-20T14:13:21.719Z",
                    "modifiedAt": "2025-12-20T14:13:21.719Z"
                  },
                  "message": "User registered successfully",
                  "error": null
                }
              }
            }
          },
          "headers": {
            "ETag": {
              "schema": {
                "type": "string"
              },
              "description": "Version number for optimistic locking",
              "example": "W/\"e7-Xir8ykDK8XwH0h9LJWeTihuqIxA\""
            }
          }
        }
      }
    }
  },
  "/auth/login": {
    "post": {
      "tags": [
        "Authentication"
      ],
      "summary": "login",
      "description": "login",
      "requestBody": {
        "required": true,
        "content": {
          "application/json": {
            "schema": {
              "type": "object",
              "example": {
                "email": "johndoe@maildrop.cc",
                "password": "StronkPW@619"
              }
            }
          }
        }
      },
      "responses": {
        "200": {
          "description": "sucess",
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "example": {
                  "success": true,
                  "data": {
                    "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImpvaG5kb2VAbWFpbGRyb3AuY2MiLCJ1c2VySWQiOjIsImlhdCI6MTc2NjI0MDA1MiwiZXhwIjoxNzY2MjQzNjUyfQ.1tSSl1YpxWPWJcbDl4gM65erfZbCVnxBCWfMaBh1iC4",
                    "refreshToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImpvaG5kb2VAbWFpbGRyb3AuY2MiLCJ1c2VySWQiOjIsImlhdCI6MTc2NjI0MDA1MiwiZXhwIjoxNzY2ODQ0ODUyfQ.dUcIbKRr1gAe_C4exafHZCTHcB1x9Dyv2BDis-mfptQ"
                  },
                  "message": "Login successful",
                  "error": null
                }
              }
            }
          },
          "headers": {
            "ETag": {
              "schema": {
                "type": "string"
              },
              "description": "Version number for optimistic locking",
              "example": "W/\"1d4-e55SP68ReqKUIO5VW39hCuHOMPA\""
            }
          }
        },
        "401": {
          "description": "invalid creds",
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "example": {
                  "success": false,
                  "data": null,
                  "message": "Login failed",
                  "error": [
                    {
                      "code": 401,
                      "messages": [
                        "Login failed",
                        "Invalid credentials"
                      ]
                    }
                  ]
                }
              }
            }
          },
          "headers": {
            "ETag": {
              "schema": {
                "type": "string"
              },
              "description": "Version number for optimistic locking",
              "example": "W/\"7f-qdcZDYwCncNQlYoHrl6nBCTS4c0\""
            }
          }
        }
      }
    }
  },
  "/auth/refresh": {
    "post": {
      "tags": [
        "Authentication"
      ],
      "summary": "refreshAccessToken",
      "description": "refreshAccessToken",
      "requestBody": {
        "required": true,
        "content": {
          "application/json": {
            "schema": {
              "type": "object",
              "example": {
                "refreshToken": "{{refreshToken}}"
              }
            }
          }
        }
      },
      "responses": {
        "200": {
          "description": "success",
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "example": {
                  "success": true,
                  "data": {
                    "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImpvaG5kb2VAbWFpbGRyb3AuY2MiLCJ1c2VySWQiOjIsImlhdCI6MTc2NjI0MDA3MiwiZXhwIjoxNzY2MjQzNjcyfQ.sNYTw5HCCmAuahMP5msVTCGvafYw9UBAWa_FTLYlb3Q"
                  },
                  "message": "Token refreshed successfully",
                  "error": null
                }
              }
            }
          },
          "headers": {
            "ETag": {
              "schema": {
                "type": "string"
              },
              "description": "Version number for optimistic locking",
              "example": "W/\"117-vIXbWvOHks2MZN0VshlzeYDT57Q\""
            }
          }
        },
        "401": {
          "description": "invalid token",
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "example": {
                  "success": false,
                  "data": null,
                  "message": "Token refresh failed",
                  "error": [
                    {
                      "code": 401,
                      "messages": [
                        "Token refresh failed",
                        "Invalid refresh token"
                      ]
                    }
                  ]
                }
              }
            }
          },
          "headers": {
            "ETag": {
              "schema": {
                "type": "string"
              },
              "description": "Version number for optimistic locking",
              "example": "W/\"91-Y3GYbDaQSml0yUHQXOfkt4nAjC8\""
            }
          }
        }
      }
    }
  },
  "/auth/logout": {
    "delete": {
      "tags": [
        "Authentication"
      ],
      "summary": "logout",
      "description": "logout",
      "requestBody": {
        "required": true,
        "content": {
          "application/json": {
            "schema": {
              "type": "object",
              "example": {
                "refreshToken": "{{refreshToken}}"
              }
            }
          }
        }
      },
      "responses": {
        "200": {
          "description": "success",
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "example": {
                  "success": true,
                  "data": null,
                  "message": "Logout successful",
                  "error": null
                }
              }
            }
          },
          "headers": {
            "ETag": {
              "schema": {
                "type": "string"
              },
              "description": "Version number for optimistic locking",
              "example": "W/\"47-/6SB6hwLI4PHBf6yQQBvHzhDTIo\""
            }
          }
        }
      }
    }
  },
  "/notes": {
    "post": {
      "tags": [
        "Notes"
      ],
      "summary": "create note",
      "description": "create note",
      "requestBody": {
        "required": true,
        "content": {
          "application/json": {
            "schema": {
              "type": "object",
              "example": {
                "title": "C_O_P",
                "content": "the only thing you have to fear is fear itslef"
              }
            }
          }
        }
      },
      "responses": {
        "201": {
          "description": "success",
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "example": {
                  "success": true,
                  "data": {
                    "id": "6ff1379d-5262-4d7e-91b0-8e579368dda7",
                    "title": "drd",
                    "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                    "version": 1,
                    "isDeleted": false,
                    "deletedAt": null,
                    "userId": 2,
                    "createdAt": "2025-12-20T14:16:48.792Z",
                    "updatedAt": "2025-12-20T14:16:48.792Z"
                  },
                  "message": "Note created successfully",
                  "error": null
                }
              }
            }
          },
          "headers": {
            "ETag": {
              "schema": {
                "type": "string"
              },
              "description": "Version number for optimistic locking",
              "example": "\"1\""
            }
          }
        }
      }
    },
    "get": {
      "tags": [
        "Notes"
      ],
      "summary": "list notes",
      "description": "list notes",
      "parameters": [
        {
          "name": "page",
          "in": "query",
          "required": false,
          "schema": {
            "type": "string"
          },
          "description": "page",
          "example": "1"
        },
        {
          "name": "limit",
          "in": "query",
          "required": false,
          "schema": {
            "type": "string"
          },
          "description": "limit",
          "example": "10"
        }
      ],
      "requestBody": {
        "required": true,
        "content": {
          "application/json": {
            "schema": {
              "type": "object",
              "example": {
                "title": "drd",
                "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
              }
            }
          }
        }
      },
      "responses": {
        "200": {
          "description": "success",
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "example": {
                  "success": true,
                  "data": [
                    {
                      "id": "6ff1379d-5262-4d7e-91b0-8e579368dda7",
                      "title": "drd",
                      "version": 1,
                      "userId": 2,
                      "createdAt": "2025-12-20T14:16:48.792Z",
                      "updatedAt": "2025-12-20T14:16:48.792Z"
                    }
                  ],
                  "message": "Notes retrieved successfully",
                  "error": null,
                  "meta": {
                    "total": 1,
                    "page": 1,
                    "limit": 1,
                    "totalPages": 1
                  }
                }
              }
            }
          },
          "headers": {
            "ETag": {
              "schema": {
                "type": "string"
              },
              "description": "Version number for optimistic locking",
              "example": "W/\"125-C2240gGAiC4lpqnyMjbpsTs2flw\""
            }
          }
        }
      }
    }
  },
  "/notes/search": {
    "get": {
      "tags": [
        "Notes"
      ],
      "summary": "search notes",
      "description": "search notes",
      "parameters": [
        {
          "name": "page",
          "in": "query",
          "required": false,
          "schema": {
            "type": "string"
          },
          "description": "page",
          "example": "1"
        },
        {
          "name": "limit",
          "in": "query",
          "required": false,
          "schema": {
            "type": "string"
          },
          "description": "limit",
          "example": "1"
        },
        {
          "name": "q",
          "in": "query",
          "required": false,
          "schema": {
            "type": "string"
          },
          "description": "q",
          "example": "fear"
        }
      ],
      "requestBody": {
        "required": true,
        "content": {
          "application/json": {
            "schema": {
              "type": "object",
              "example": {
                "title": "drd",
                "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
              }
            }
          }
        }
      },
      "responses": {
        "200": {
          "description": "success search",
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "example": {
                  "success": true,
                  "data": [
                    {
                      "id": "6ff1379d-5262-4d7e-91b0-8e579368dda7",
                      "title": "drd",
                      "version": 1,
                      "userId": 2,
                      "createdAt": "2025-12-20T14:16:48.792Z",
                      "updatedAt": "2025-12-20T14:16:48.792Z"
                    }
                  ],
                  "message": "Search results retrieved successfully",
                  "error": null,
                  "meta": {
                    "total": 1,
                    "page": 1,
                    "limit": 1,
                    "totalPages": 1,
                    "searchQuery": "lorem"
                  }
                }
              }
            }
          },
          "headers": {
            "ETag": {
              "schema": {
                "type": "string"
              },
              "description": "Version number for optimistic locking",
              "example": "W/\"144-39MpqqwSJ9oa7Yrg7JjjiSCm0cg\""
            }
          }
        }
      }
    }
  },
  "/notes/{id}": {
    "get": {
      "tags": [
        "Notes"
      ],
      "summary": "get note details",
      "description": "get note details",
      "parameters": [
        {
          "name": "id",
          "in": "path",
          "required": true,
          "schema": {
            "type": "string"
          },
          "description": "id"
        }
      ],
      "responses": {
        "200": {
          "description": "success",
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "example": {
                  "success": true,
                  "data": {
                    "id": "6ff1379d-5262-4d7e-91b0-8e579368dda7",
                    "title": "drd",
                    "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                    "version": 1,
                    "isDeleted": false,
                    "deletedAt": null,
                    "userId": 2,
                    "createdAt": "2025-12-20T14:16:48.792Z",
                    "updatedAt": "2025-12-20T14:16:48.792Z"
                  },
                  "message": "Note retrieved successfully",
                  "error": null
                }
              }
            }
          },
          "headers": {
            "ETag": {
              "schema": {
                "type": "string"
              },
              "description": "Version number for optimistic locking",
              "example": "\"1\""
            }
          }
        }
      }
    },
    "put": {
      "tags": [
        "Notes"
      ],
      "summary": "update note",
      "description": "update note",
      "parameters": [
        {
          "name": "id",
          "in": "path",
          "required": true,
          "schema": {
            "type": "string"
          },
          "description": "id"
        },
        {
          "name": "If-Match",
          "in": "header",
          "required": true,
          "schema": {
            "type": "string"
          },
          "description": "Current version number for optimistic locking",
          "example": "{{if-match}}"
        }
      ],
      "requestBody": {
        "required": true,
        "content": {
          "application/json": {
            "schema": {
              "type": "object",
              "example": {
                "title": "C_O_P",
                "content": "when you look into the abyss, the abyss looks back into you"
              }
            }
          }
        }
      },
      "responses": {
        "200": {
          "description": "success",
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "example": {
                  "success": true,
                  "data": {
                    "id": "6ff1379d-5262-4d7e-91b0-8e579368dda7",
                    "title": "drd",
                    "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                    "version": 2,
                    "isDeleted": false,
                    "deletedAt": null,
                    "userId": 2,
                    "createdAt": "2025-12-20T14:16:48.792Z",
                    "updatedAt": "2025-12-20T14:35:49.741Z"
                  },
                  "message": "Note updated successfully",
                  "error": null
                }
              }
            }
          },
          "headers": {
            "ETag": {
              "schema": {
                "type": "string"
              },
              "description": "Version number for optimistic locking",
              "example": "\"2\""
            }
          }
        },
        "428": {
          "description": "no if-match header",
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "example": {
                  "success": false,
                  "data": null,
                  "message": "If-Match header is required for this operation",
                  "error": [
                    {
                      "code": 428,
                      "messages": [
                        "If-Match header is required for this operation",
                        "An error occurred"
                      ]
                    }
                  ]
                }
              }
            }
          },
          "headers": {
            "ETag": {
              "schema": {
                "type": "string"
              },
              "description": "Version number for optimistic locking",
              "example": "W/\"c1-KYISAfaPoF1oTtoyE2PqlJY9tro\""
            }
          }
        }
      }
    },
    "delete": {
      "tags": [
        "Notes"
      ],
      "summary": "delete note",
      "description": "delete note",
      "parameters": [
        {
          "name": "id",
          "in": "path",
          "required": true,
          "schema": {
            "type": "string"
          },
          "description": "id"
        },
        {
          "name": "If-Match",
          "in": "header",
          "required": true,
          "schema": {
            "type": "string"
          },
          "description": "Current version number for optimistic locking",
          "example": "{{if-match}}"
        }
      ],
      "responses": {
        "200": {
          "description": "success",
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "example": {
                  "success": true,
                  "data": null,
                  "message": "Note deleted successfully",
                  "error": null
                }
              }
            }
          },
          "headers": {
            "ETag": {
              "schema": {
                "type": "string"
              },
              "description": "Version number for optimistic locking",
              "example": "W/\"4f-tM+QJnlgUE7F6OqgoacWAoHX1HE\""
            }
          }
        }
      }
    }
  },
  "/notes/{id}/versions": {
    "get": {
      "tags": [
        "Notes"
      ],
      "summary": "get note versions",
      "description": "get note versions",
      "parameters": [
        {
          "name": "id",
          "in": "path",
          "required": true,
          "schema": {
            "type": "string"
          },
          "description": "id"
        }
      ],
      "responses": {
        "200": {
          "description": "success",
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "example": {
                  "success": true,
                  "data": [
                    {
                      "id": "a608b5c3-07d2-41b1-9cfb-0674097256dd",
                      "noteId": "f7b7b5f8-27c2-4369-9782-2bb9d3539235",
                      "title": "C_O_P",
                      "content": "when you look into the abyss, the abyss looks back into you",
                      "versionNumber": 3,
                      "createdAt": "2025-12-20T19:56:51.484Z",
                      "createdBy": 2,
                      "changeDescription": "testing"
                    },
                    {
                      "id": "4412c4e2-3581-446c-a7cf-79bc2b0b124f",
                      "noteId": "f7b7b5f8-27c2-4369-9782-2bb9d3539235",
                      "title": "C_O_P",
                      "content": "the only thing you have to fear is fear itself",
                      "versionNumber": 2,
                      "createdAt": "2025-12-20T14:40:45.111Z",
                      "createdBy": 2,
                      "changeDescription": null
                    },
                    {
                      "id": "483218d1-cf5c-456a-aa3e-bdd3a461ba45",
                      "noteId": "f7b7b5f8-27c2-4369-9782-2bb9d3539235",
                      "title": "C_O_P",
                      "content": "the only thing you have to fear is fear itslef",
                      "versionNumber": 1,
                      "createdAt": "2025-12-20T14:39:41.708Z",
                      "createdBy": 2,
                      "changeDescription": null
                    }
                  ],
                  "message": "Version history retrieved successfully",
                  "error": null
                }
              }
            }
          },
          "headers": {
            "ETag": {
              "schema": {
                "type": "string"
              },
              "description": "Version number for optimistic locking",
              "example": "W/\"386-k3wuSj5/RynZ4VBoI4PvdQR7ELE\""
            }
          }
        }
      }
    }
  },
  "/notes/{id}/revert": {
    "post": {
      "tags": [
        "Notes"
      ],
      "summary": "revert note version",
      "description": "revert note version",
      "parameters": [
        {
          "name": "id",
          "in": "path",
          "required": true,
          "schema": {
            "type": "string"
          },
          "description": "id"
        },
        {
          "name": "If-Match",
          "in": "header",
          "required": true,
          "schema": {
            "type": "string"
          },
          "description": "Current version number for optimistic locking",
          "example": "{{if-match}}"
        }
      ],
      "requestBody": {
        "required": true,
        "content": {
          "application/json": {
            "schema": {
              "type": "object",
              "example": {
                "versionNumber": 2,
                "changeDescription": "testing"
              }
            }
          }
        }
      },
      "responses": {
        "200": {
          "description": "success",
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "example": {
                  "success": true,
                  "data": {
                    "id": "f7b7b5f8-27c2-4369-9782-2bb9d3539235",
                    "title": "C_O_P",
                    "content": "the only thing you have to fear is fear itself",
                    "version": 4,
                    "isDeleted": false,
                    "deletedAt": null,
                    "userId": 2,
                    "createdAt": "2025-12-20T14:37:57.936Z",
                    "updatedAt": "2025-12-20T19:56:51.489Z"
                  },
                  "message": "Note reverted to version 2 successfully",
                  "error": null
                }
              }
            }
          },
          "headers": {
            "ETag": {
              "schema": {
                "type": "string"
              },
              "description": "Version number for optimistic locking",
              "example": "\"4\""
            }
          }
        }
      }
    }
  },
  "/notes/search-versions": {
    "get": {
      "tags": [
        "Notes"
      ],
      "summary": "search notes versions",
      "description": "search notes versions",
      "parameters": [
        {
          "name": "page",
          "in": "query",
          "required": false,
          "schema": {
            "type": "string"
          },
          "description": "page",
          "example": "1"
        },
        {
          "name": "limit",
          "in": "query",
          "required": false,
          "schema": {
            "type": "string"
          },
          "description": "limit",
          "example": "10"
        },
        {
          "name": "q",
          "in": "query",
          "required": false,
          "schema": {
            "type": "string"
          },
          "description": "q",
          "example": "fear"
        }
      ],
      "requestBody": {
        "required": true,
        "content": {
          "application/json": {
            "schema": {
              "type": "object",
              "example": {
                "title": "drd",
                "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
              }
            }
          }
        }
      },
      "responses": {
        "200": {
          "description": "serach old notes",
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "example": {
                  "success": true,
                  "data": [
                    {
                      "id": "4412c4e2-3581-446c-a7cf-79bc2b0b124f",
                      "noteId": "f7b7b5f8-27c2-4369-9782-2bb9d3539235",
                      "title": "C_O_P",
                      "versionNumber": 2,
                      "createdAt": "2025-12-20T14:40:45.111Z",
                      "createdBy": 2,
                      "changeDescription": null
                    },
                    {
                      "id": "483218d1-cf5c-456a-aa3e-bdd3a461ba45",
                      "noteId": "f7b7b5f8-27c2-4369-9782-2bb9d3539235",
                      "title": "C_O_P",
                      "versionNumber": 1,
                      "createdAt": "2025-12-20T14:39:41.708Z",
                      "createdBy": 2,
                      "changeDescription": null
                    }
                  ],
                  "message": "Version search results retrieved successfully",
                  "error": null,
                  "meta": {
                    "total": 2,
                    "page": 1,
                    "limit": 10,
                    "totalPages": 1,
                    "searchQuery": "fear"
                  }
                }
              }
            }
          },
          "headers": {
            "ETag": {
              "schema": {
                "type": "string"
              },
              "description": "Version number for optimistic locking",
              "example": "W/\"247-zLK+7wGkl1HZ6qDg3e4XTQdkYRI\""
            }
          }
        }
      }
    }
  }
}
};
