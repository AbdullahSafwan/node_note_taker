// Auto-generated from Postman collection: note_taker
// Generated on: 2025-12-21T14:56:30.269Z

export const postmanSwagger = {
  paths: {
    "/auth/signup": {
      post: {
        tags: ["Authentication"],
        summary: "signup",
        requestBody: {
          content: {
            "application/json": {
              schema: {
                type: "object",
                example: {
                  firstName: "John",
                  phoneNumber: "03001234567",
                  lastName: "Doe",
                  email: "johndoe@maildrop.cc",
                  password: "StronkPW@619",
                },
              },
            },
          },
        },
        responses: {
          "201": {
            description: "Created",
            headers: {
              "Content-Security-Policy": {
                schema: {
                  type: "string",
                  example:
                    "default-src 'self';base-uri 'self';font-src 'self' https: data:;form-action 'self';frame-ancestors 'self';img-src 'self' data:;object-src 'none';script-src 'self';script-src-attr 'none';style-src 'self' https: 'unsafe-inline';upgrade-insecure-requests",
                },
              },
              "Cross-Origin-Opener-Policy": {
                schema: {
                  type: "string",
                  example: "same-origin",
                },
              },
              "Cross-Origin-Resource-Policy": {
                schema: {
                  type: "string",
                  example: "same-origin",
                },
              },
              "Origin-Agent-Cluster": {
                schema: {
                  type: "string",
                  example: "?1",
                },
              },
              "Referrer-Policy": {
                schema: {
                  type: "string",
                  example: "no-referrer",
                },
              },
              "Strict-Transport-Security": {
                schema: {
                  type: "string",
                  example: "max-age=31536000; includeSubDomains",
                },
              },
              "X-Content-Type-Options": {
                schema: {
                  type: "string",
                  example: "nosniff",
                },
              },
              "X-DNS-Prefetch-Control": {
                schema: {
                  type: "string",
                  example: "off",
                },
              },
              "X-Download-Options": {
                schema: {
                  type: "string",
                  example: "noopen",
                },
              },
              "X-Frame-Options": {
                schema: {
                  type: "string",
                  example: "SAMEORIGIN",
                },
              },
              "X-Permitted-Cross-Domain-Policies": {
                schema: {
                  type: "string",
                  example: "none",
                },
              },
              "X-XSS-Protection": {
                schema: {
                  type: "integer",
                  example: "0",
                },
              },
              "Access-Control-Allow-Origin": {
                schema: {
                  type: "string",
                  example: "*",
                },
              },
              "Access-Control-Allow-Credentials": {
                schema: {
                  type: "boolean",
                  example: "true",
                },
              },
              "Content-Type": {
                schema: {
                  type: "string",
                  example: "application/json; charset=utf-8",
                },
              },
              "Content-Length": {
                schema: {
                  type: "integer",
                  example: "231",
                },
              },
              ETag: {
                schema: {
                  type: "string",
                  example: 'W/"e7-Xir8ykDK8XwH0h9LJWeTihuqIxA"',
                },
              },
              Date: {
                schema: {
                  type: "string",
                  example: "Sat, 20 Dec 2025 14:13:21 GMT",
                },
              },
              Connection: {
                schema: {
                  type: "string",
                  example: "keep-alive",
                },
              },
              "Keep-Alive": {
                schema: {
                  type: "string",
                  example: "timeout=5",
                },
              },
            },
            content: {
              "text/plain": {
                schema: {
                  type: "string",
                },
                example:
                  '{\n    "success": true,\n    "data": {\n        "id": 2,\n        "email": "johndoe@maildrop.cc",\n        "firstName": "John",\n        "lastName": "Doe",\n        "createdAt": "2025-12-20T14:13:21.719Z",\n        "modifiedAt": "2025-12-20T14:13:21.719Z"\n    },\n    "message": "User registered successfully",\n    "error": null\n}',
              },
            },
          },
        },
      },
    },
    "/auth/login": {
      post: {
        tags: ["Authentication"],
        summary: "login",
        requestBody: {
          content: {
            "application/json": {
              schema: {
                type: "object",
                example: {
                  email: "johndoe@maildrop.cc",
                  password: "StronkPW@619",
                },
              },
            },
          },
        },
        responses: {
          "200": {
            description: "OK",
            headers: {
              "Content-Security-Policy": {
                schema: {
                  type: "string",
                  example:
                    "default-src 'self';base-uri 'self';font-src 'self' https: data:;form-action 'self';frame-ancestors 'self';img-src 'self' data:;object-src 'none';script-src 'self';script-src-attr 'none';style-src 'self' https: 'unsafe-inline';upgrade-insecure-requests",
                },
              },
              "Cross-Origin-Opener-Policy": {
                schema: {
                  type: "string",
                  example: "same-origin",
                },
              },
              "Cross-Origin-Resource-Policy": {
                schema: {
                  type: "string",
                  example: "same-origin",
                },
              },
              "Origin-Agent-Cluster": {
                schema: {
                  type: "string",
                  example: "?1",
                },
              },
              "Referrer-Policy": {
                schema: {
                  type: "string",
                  example: "no-referrer",
                },
              },
              "Strict-Transport-Security": {
                schema: {
                  type: "string",
                  example: "max-age=31536000; includeSubDomains",
                },
              },
              "X-Content-Type-Options": {
                schema: {
                  type: "string",
                  example: "nosniff",
                },
              },
              "X-DNS-Prefetch-Control": {
                schema: {
                  type: "string",
                  example: "off",
                },
              },
              "X-Download-Options": {
                schema: {
                  type: "string",
                  example: "noopen",
                },
              },
              "X-Frame-Options": {
                schema: {
                  type: "string",
                  example: "SAMEORIGIN",
                },
              },
              "X-Permitted-Cross-Domain-Policies": {
                schema: {
                  type: "string",
                  example: "none",
                },
              },
              "X-XSS-Protection": {
                schema: {
                  type: "integer",
                  example: "0",
                },
              },
              "Access-Control-Allow-Origin": {
                schema: {
                  type: "string",
                  example: "*",
                },
              },
              "Access-Control-Allow-Credentials": {
                schema: {
                  type: "boolean",
                  example: "true",
                },
              },
              "Content-Type": {
                schema: {
                  type: "string",
                  example: "application/json; charset=utf-8",
                },
              },
              "Content-Length": {
                schema: {
                  type: "integer",
                  example: "468",
                },
              },
              ETag: {
                schema: {
                  type: "string",
                  example: 'W/"1d4-e55SP68ReqKUIO5VW39hCuHOMPA"',
                },
              },
              Date: {
                schema: {
                  type: "string",
                  example: "Sat, 20 Dec 2025 14:14:12 GMT",
                },
              },
              Connection: {
                schema: {
                  type: "string",
                  example: "keep-alive",
                },
              },
              "Keep-Alive": {
                schema: {
                  type: "string",
                  example: "timeout=5",
                },
              },
            },
            content: {
              "text/plain": {
                schema: {
                  type: "string",
                },
                example:
                  '{\n    "success": true,\n    "data": {\n        "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImpvaG5kb2VAbWFpbGRyb3AuY2MiLCJ1c2VySWQiOjIsImlhdCI6MTc2NjI0MDA1MiwiZXhwIjoxNzY2MjQzNjUyfQ.1tSSl1YpxWPWJcbDl4gM65erfZbCVnxBCWfMaBh1iC4",\n        "refreshToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImpvaG5kb2VAbWFpbGRyb3AuY2MiLCJ1c2VySWQiOjIsImlhdCI6MTc2NjI0MDA1MiwiZXhwIjoxNzY2ODQ0ODUyfQ.dUcIbKRr1gAe_C4exafHZCTHcB1x9Dyv2BDis-mfptQ"\n    },\n    "message": "Login successful",\n    "error": null\n}',
              },
            },
          },
          "401": {
            description: "Unauthorized",
            headers: {
              "Content-Security-Policy": {
                schema: {
                  type: "string",
                  example:
                    "default-src 'self';base-uri 'self';font-src 'self' https: data:;form-action 'self';frame-ancestors 'self';img-src 'self' data:;object-src 'none';script-src 'self';script-src-attr 'none';style-src 'self' https: 'unsafe-inline';upgrade-insecure-requests",
                },
              },
              "Cross-Origin-Opener-Policy": {
                schema: {
                  type: "string",
                  example: "same-origin",
                },
              },
              "Cross-Origin-Resource-Policy": {
                schema: {
                  type: "string",
                  example: "same-origin",
                },
              },
              "Origin-Agent-Cluster": {
                schema: {
                  type: "string",
                  example: "?1",
                },
              },
              "Referrer-Policy": {
                schema: {
                  type: "string",
                  example: "no-referrer",
                },
              },
              "Strict-Transport-Security": {
                schema: {
                  type: "string",
                  example: "max-age=31536000; includeSubDomains",
                },
              },
              "X-Content-Type-Options": {
                schema: {
                  type: "string",
                  example: "nosniff",
                },
              },
              "X-DNS-Prefetch-Control": {
                schema: {
                  type: "string",
                  example: "off",
                },
              },
              "X-Download-Options": {
                schema: {
                  type: "string",
                  example: "noopen",
                },
              },
              "X-Frame-Options": {
                schema: {
                  type: "string",
                  example: "SAMEORIGIN",
                },
              },
              "X-Permitted-Cross-Domain-Policies": {
                schema: {
                  type: "string",
                  example: "none",
                },
              },
              "X-XSS-Protection": {
                schema: {
                  type: "integer",
                  example: "0",
                },
              },
              "Access-Control-Allow-Origin": {
                schema: {
                  type: "string",
                  example: "*",
                },
              },
              "Access-Control-Allow-Credentials": {
                schema: {
                  type: "boolean",
                  example: "true",
                },
              },
              "Content-Type": {
                schema: {
                  type: "string",
                  example: "application/json; charset=utf-8",
                },
              },
              "Content-Length": {
                schema: {
                  type: "integer",
                  example: "127",
                },
              },
              ETag: {
                schema: {
                  type: "string",
                  example: 'W/"7f-qdcZDYwCncNQlYoHrl6nBCTS4c0"',
                },
              },
              Date: {
                schema: {
                  type: "string",
                  example: "Sat, 20 Dec 2025 14:13:38 GMT",
                },
              },
              Connection: {
                schema: {
                  type: "string",
                  example: "keep-alive",
                },
              },
              "Keep-Alive": {
                schema: {
                  type: "string",
                  example: "timeout=5",
                },
              },
            },
            content: {
              "text/plain": {
                schema: {
                  type: "string",
                },
                example:
                  '{\n    "success": false,\n    "data": null,\n    "message": "Login failed",\n    "error": [\n        {\n            "code": 401,\n            "messages": [\n                "Login failed",\n                "Invalid credentials"\n            ]\n        }\n    ]\n}',
              },
            },
          },
        },
      },
    },
    "/auth/refresh": {
      post: {
        tags: ["Authentication"],
        summary: "refreshAccessToken",
        requestBody: {
          content: {
            "application/json": {
              schema: {
                type: "object",
                example: {
                  refreshToken: "{{refreshToken}}",
                },
              },
            },
          },
        },
        responses: {
          "200": {
            description: "OK",
            headers: {
              "Content-Security-Policy": {
                schema: {
                  type: "string",
                  example:
                    "default-src 'self';base-uri 'self';font-src 'self' https: data:;form-action 'self';frame-ancestors 'self';img-src 'self' data:;object-src 'none';script-src 'self';script-src-attr 'none';style-src 'self' https: 'unsafe-inline';upgrade-insecure-requests",
                },
              },
              "Cross-Origin-Opener-Policy": {
                schema: {
                  type: "string",
                  example: "same-origin",
                },
              },
              "Cross-Origin-Resource-Policy": {
                schema: {
                  type: "string",
                  example: "same-origin",
                },
              },
              "Origin-Agent-Cluster": {
                schema: {
                  type: "string",
                  example: "?1",
                },
              },
              "Referrer-Policy": {
                schema: {
                  type: "string",
                  example: "no-referrer",
                },
              },
              "Strict-Transport-Security": {
                schema: {
                  type: "string",
                  example: "max-age=31536000; includeSubDomains",
                },
              },
              "X-Content-Type-Options": {
                schema: {
                  type: "string",
                  example: "nosniff",
                },
              },
              "X-DNS-Prefetch-Control": {
                schema: {
                  type: "string",
                  example: "off",
                },
              },
              "X-Download-Options": {
                schema: {
                  type: "string",
                  example: "noopen",
                },
              },
              "X-Frame-Options": {
                schema: {
                  type: "string",
                  example: "SAMEORIGIN",
                },
              },
              "X-Permitted-Cross-Domain-Policies": {
                schema: {
                  type: "string",
                  example: "none",
                },
              },
              "X-XSS-Protection": {
                schema: {
                  type: "integer",
                  example: "0",
                },
              },
              "Access-Control-Allow-Origin": {
                schema: {
                  type: "string",
                  example: "*",
                },
              },
              "Access-Control-Allow-Credentials": {
                schema: {
                  type: "boolean",
                  example: "true",
                },
              },
              "Content-Type": {
                schema: {
                  type: "string",
                  example: "application/json; charset=utf-8",
                },
              },
              "Content-Length": {
                schema: {
                  type: "integer",
                  example: "279",
                },
              },
              ETag: {
                schema: {
                  type: "string",
                  example: 'W/"117-vIXbWvOHks2MZN0VshlzeYDT57Q"',
                },
              },
              Date: {
                schema: {
                  type: "string",
                  example: "Sat, 20 Dec 2025 14:14:32 GMT",
                },
              },
              Connection: {
                schema: {
                  type: "string",
                  example: "keep-alive",
                },
              },
              "Keep-Alive": {
                schema: {
                  type: "string",
                  example: "timeout=5",
                },
              },
            },
            content: {
              "text/plain": {
                schema: {
                  type: "string",
                },
                example:
                  '{\n    "success": true,\n    "data": {\n        "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImpvaG5kb2VAbWFpbGRyb3AuY2MiLCJ1c2VySWQiOjIsImlhdCI6MTc2NjI0MDA3MiwiZXhwIjoxNzY2MjQzNjcyfQ.sNYTw5HCCmAuahMP5msVTCGvafYw9UBAWa_FTLYlb3Q"\n    },\n    "message": "Token refreshed successfully",\n    "error": null\n}',
              },
            },
          },
          "401": {
            description: "Unauthorized",
            headers: {
              "Content-Security-Policy": {
                schema: {
                  type: "string",
                  example:
                    "default-src 'self';base-uri 'self';font-src 'self' https: data:;form-action 'self';frame-ancestors 'self';img-src 'self' data:;object-src 'none';script-src 'self';script-src-attr 'none';style-src 'self' https: 'unsafe-inline';upgrade-insecure-requests",
                },
              },
              "Cross-Origin-Opener-Policy": {
                schema: {
                  type: "string",
                  example: "same-origin",
                },
              },
              "Cross-Origin-Resource-Policy": {
                schema: {
                  type: "string",
                  example: "same-origin",
                },
              },
              "Origin-Agent-Cluster": {
                schema: {
                  type: "string",
                  example: "?1",
                },
              },
              "Referrer-Policy": {
                schema: {
                  type: "string",
                  example: "no-referrer",
                },
              },
              "Strict-Transport-Security": {
                schema: {
                  type: "string",
                  example: "max-age=31536000; includeSubDomains",
                },
              },
              "X-Content-Type-Options": {
                schema: {
                  type: "string",
                  example: "nosniff",
                },
              },
              "X-DNS-Prefetch-Control": {
                schema: {
                  type: "string",
                  example: "off",
                },
              },
              "X-Download-Options": {
                schema: {
                  type: "string",
                  example: "noopen",
                },
              },
              "X-Frame-Options": {
                schema: {
                  type: "string",
                  example: "SAMEORIGIN",
                },
              },
              "X-Permitted-Cross-Domain-Policies": {
                schema: {
                  type: "string",
                  example: "none",
                },
              },
              "X-XSS-Protection": {
                schema: {
                  type: "integer",
                  example: "0",
                },
              },
              "Access-Control-Allow-Origin": {
                schema: {
                  type: "string",
                  example: "*",
                },
              },
              "Access-Control-Allow-Credentials": {
                schema: {
                  type: "boolean",
                  example: "true",
                },
              },
              "Content-Type": {
                schema: {
                  type: "string",
                  example: "application/json; charset=utf-8",
                },
              },
              "Content-Length": {
                schema: {
                  type: "integer",
                  example: "145",
                },
              },
              ETag: {
                schema: {
                  type: "string",
                  example: 'W/"91-Y3GYbDaQSml0yUHQXOfkt4nAjC8"',
                },
              },
              Date: {
                schema: {
                  type: "string",
                  example: "Sat, 20 Dec 2025 14:14:41 GMT",
                },
              },
              Connection: {
                schema: {
                  type: "string",
                  example: "keep-alive",
                },
              },
              "Keep-Alive": {
                schema: {
                  type: "string",
                  example: "timeout=5",
                },
              },
            },
            content: {
              "text/plain": {
                schema: {
                  type: "string",
                },
                example:
                  '{\n    "success": false,\n    "data": null,\n    "message": "Token refresh failed",\n    "error": [\n        {\n            "code": 401,\n            "messages": [\n                "Token refresh failed",\n                "Invalid refresh token"\n            ]\n        }\n    ]\n}',
              },
            },
          },
        },
      },
    },
    "/auth/logout": {
      delete: {
        tags: ["Authentication"],
        summary: "logout",
        responses: {
          "200": {
            description: "OK",
            headers: {
              "Content-Security-Policy": {
                schema: {
                  type: "string",
                  example:
                    "default-src 'self';base-uri 'self';font-src 'self' https: data:;form-action 'self';frame-ancestors 'self';img-src 'self' data:;object-src 'none';script-src 'self';script-src-attr 'none';style-src 'self' https: 'unsafe-inline';upgrade-insecure-requests",
                },
              },
              "Cross-Origin-Opener-Policy": {
                schema: {
                  type: "string",
                  example: "same-origin",
                },
              },
              "Cross-Origin-Resource-Policy": {
                schema: {
                  type: "string",
                  example: "same-origin",
                },
              },
              "Origin-Agent-Cluster": {
                schema: {
                  type: "string",
                  example: "?1",
                },
              },
              "Referrer-Policy": {
                schema: {
                  type: "string",
                  example: "no-referrer",
                },
              },
              "Strict-Transport-Security": {
                schema: {
                  type: "string",
                  example: "max-age=31536000; includeSubDomains",
                },
              },
              "X-Content-Type-Options": {
                schema: {
                  type: "string",
                  example: "nosniff",
                },
              },
              "X-DNS-Prefetch-Control": {
                schema: {
                  type: "string",
                  example: "off",
                },
              },
              "X-Download-Options": {
                schema: {
                  type: "string",
                  example: "noopen",
                },
              },
              "X-Frame-Options": {
                schema: {
                  type: "string",
                  example: "SAMEORIGIN",
                },
              },
              "X-Permitted-Cross-Domain-Policies": {
                schema: {
                  type: "string",
                  example: "none",
                },
              },
              "X-XSS-Protection": {
                schema: {
                  type: "integer",
                  example: "0",
                },
              },
              "Access-Control-Allow-Origin": {
                schema: {
                  type: "string",
                  example: "*",
                },
              },
              "Access-Control-Allow-Credentials": {
                schema: {
                  type: "boolean",
                  example: "true",
                },
              },
              "Content-Type": {
                schema: {
                  type: "string",
                  example: "application/json; charset=utf-8",
                },
              },
              "Content-Length": {
                schema: {
                  type: "integer",
                  example: "71",
                },
              },
              ETag: {
                schema: {
                  type: "string",
                  example: 'W/"47-/6SB6hwLI4PHBf6yQQBvHzhDTIo"',
                },
              },
              Date: {
                schema: {
                  type: "string",
                  example: "Sat, 20 Dec 2025 10:41:27 GMT",
                },
              },
              Connection: {
                schema: {
                  type: "string",
                  example: "keep-alive",
                },
              },
              "Keep-Alive": {
                schema: {
                  type: "string",
                  example: "timeout=5",
                },
              },
            },
            content: {
              "text/plain": {
                schema: {
                  type: "string",
                },
                example: '{\n    "success": true,\n    "data": null,\n    "message": "Logout successful",\n    "error": null\n}',
              },
            },
          },
        },
      },
    },
    "/notes/": {
      post: {
        tags: ["Notes"],
        summary: "create note",
        requestBody: {
          content: {
            "application/json": {
              schema: {
                type: "object",
                example: {
                  title: "books",
                  content: "wuthering heights, kane and abel, my fuedal lord, as the crow flies",
                },
              },
            },
          },
        },
        responses: {
          "201": {
            description: "Created",
            headers: {
              "Content-Security-Policy": {
                schema: {
                  type: "string",
                  example:
                    "default-src 'self';base-uri 'self';font-src 'self' https: data:;form-action 'self';frame-ancestors 'self';img-src 'self' data:;object-src 'none';script-src 'self';script-src-attr 'none';style-src 'self' https: 'unsafe-inline';upgrade-insecure-requests",
                },
              },
              "Cross-Origin-Opener-Policy": {
                schema: {
                  type: "string",
                  example: "same-origin",
                },
              },
              "Cross-Origin-Resource-Policy": {
                schema: {
                  type: "string",
                  example: "same-origin",
                },
              },
              "Origin-Agent-Cluster": {
                schema: {
                  type: "string",
                  example: "?1",
                },
              },
              "Referrer-Policy": {
                schema: {
                  type: "string",
                  example: "no-referrer",
                },
              },
              "Strict-Transport-Security": {
                schema: {
                  type: "string",
                  example: "max-age=31536000; includeSubDomains",
                },
              },
              "X-Content-Type-Options": {
                schema: {
                  type: "string",
                  example: "nosniff",
                },
              },
              "X-DNS-Prefetch-Control": {
                schema: {
                  type: "string",
                  example: "off",
                },
              },
              "X-Download-Options": {
                schema: {
                  type: "string",
                  example: "noopen",
                },
              },
              "X-Frame-Options": {
                schema: {
                  type: "string",
                  example: "SAMEORIGIN",
                },
              },
              "X-Permitted-Cross-Domain-Policies": {
                schema: {
                  type: "string",
                  example: "none",
                },
              },
              "X-XSS-Protection": {
                schema: {
                  type: "integer",
                  example: "0",
                },
              },
              "Access-Control-Allow-Origin": {
                schema: {
                  type: "string",
                  example: "*",
                },
              },
              "Access-Control-Allow-Credentials": {
                schema: {
                  type: "boolean",
                  example: "true",
                },
              },
              ETag: {
                schema: {
                  type: "string",
                  example: '"1"',
                },
              },
              "Content-Type": {
                schema: {
                  type: "string",
                  example: "application/json; charset=utf-8",
                },
              },
              "Content-Length": {
                schema: {
                  type: "integer",
                  example: "728",
                },
              },
              Date: {
                schema: {
                  type: "string",
                  example: "Sat, 20 Dec 2025 14:16:48 GMT",
                },
              },
              Connection: {
                schema: {
                  type: "string",
                  example: "keep-alive",
                },
              },
              "Keep-Alive": {
                schema: {
                  type: "string",
                  example: "timeout=5",
                },
              },
            },
            content: {
              "text/plain": {
                schema: {
                  type: "string",
                },
                example:
                  '{\n    "success": true,\n    "data": {\n        "id": "6ff1379d-5262-4d7e-91b0-8e579368dda7",\n        "title": "drd",\n        "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",\n        "version": 1,\n        "isDeleted": false,\n        "deletedAt": null,\n        "userId": 2,\n        "createdAt": "2025-12-20T14:16:48.792Z",\n        "updatedAt": "2025-12-20T14:16:48.792Z"\n    },\n    "message": "Note created successfully",\n    "error": null\n}',
              },
            },
          },
        },
      },
      get: {
        tags: ["Notes"],
        summary: "list notes",
        parameters: [
          {
            name: "page",
            in: "query",
            schema: {
              type: "integer",
            },
            example: "1",
          },
          {
            name: "limit",
            in: "query",
            schema: {
              type: "integer",
            },
            example: "10",
          },
        ],
        responses: {
          "200": {
            description: "OK",
            headers: {
              "Content-Security-Policy": {
                schema: {
                  type: "string",
                  example:
                    "default-src 'self';base-uri 'self';font-src 'self' https: data:;form-action 'self';frame-ancestors 'self';img-src 'self' data:;object-src 'none';script-src 'self';script-src-attr 'none';style-src 'self' https: 'unsafe-inline';upgrade-insecure-requests",
                },
              },
              "Cross-Origin-Opener-Policy": {
                schema: {
                  type: "string",
                  example: "same-origin",
                },
              },
              "Cross-Origin-Resource-Policy": {
                schema: {
                  type: "string",
                  example: "same-origin",
                },
              },
              "Origin-Agent-Cluster": {
                schema: {
                  type: "string",
                  example: "?1",
                },
              },
              "Referrer-Policy": {
                schema: {
                  type: "string",
                  example: "no-referrer",
                },
              },
              "Strict-Transport-Security": {
                schema: {
                  type: "string",
                  example: "max-age=31536000; includeSubDomains",
                },
              },
              "X-Content-Type-Options": {
                schema: {
                  type: "string",
                  example: "nosniff",
                },
              },
              "X-DNS-Prefetch-Control": {
                schema: {
                  type: "string",
                  example: "off",
                },
              },
              "X-Download-Options": {
                schema: {
                  type: "string",
                  example: "noopen",
                },
              },
              "X-Frame-Options": {
                schema: {
                  type: "string",
                  example: "SAMEORIGIN",
                },
              },
              "X-Permitted-Cross-Domain-Policies": {
                schema: {
                  type: "string",
                  example: "none",
                },
              },
              "X-XSS-Protection": {
                schema: {
                  type: "integer",
                  example: "0",
                },
              },
              "Access-Control-Allow-Origin": {
                schema: {
                  type: "string",
                  example: "*",
                },
              },
              "Access-Control-Allow-Credentials": {
                schema: {
                  type: "boolean",
                  example: "true",
                },
              },
              "Content-Type": {
                schema: {
                  type: "string",
                  example: "application/json; charset=utf-8",
                },
              },
              "Content-Length": {
                schema: {
                  type: "integer",
                  example: "293",
                },
              },
              ETag: {
                schema: {
                  type: "string",
                  example: 'W/"125-C2240gGAiC4lpqnyMjbpsTs2flw"',
                },
              },
              Date: {
                schema: {
                  type: "string",
                  example: "Sat, 20 Dec 2025 14:29:07 GMT",
                },
              },
              Connection: {
                schema: {
                  type: "string",
                  example: "keep-alive",
                },
              },
              "Keep-Alive": {
                schema: {
                  type: "string",
                  example: "timeout=5",
                },
              },
            },
            content: {
              "text/plain": {
                schema: {
                  type: "string",
                },
                example:
                  '{\n    "success": true,\n    "data": [\n        {\n            "id": "6ff1379d-5262-4d7e-91b0-8e579368dda7",\n            "title": "drd",\n            "version": 1,\n            "userId": 2,\n            "createdAt": "2025-12-20T14:16:48.792Z",\n            "updatedAt": "2025-12-20T14:16:48.792Z"\n        }\n    ],\n    "message": "Notes retrieved successfully",\n    "error": null,\n    "meta": {\n        "total": 1,\n        "page": 1,\n        "limit": 1,\n        "totalPages": 1\n    }\n}',
              },
            },
          },
        },
      },
    },
    "/notes/search/": {
      get: {
        tags: ["Notes"],
        summary: "search notes",
        parameters: [
          {
            name: "page",
            in: "query",
            schema: {
              type: "integer",
            },
            example: "1",
          },
          {
            name: "limit",
            in: "query",
            schema: {
              type: "integer",
            },
            example: "1",
          },
          {
            name: "q",
            in: "query",
            schema: {
              type: "string",
            },
            example: "heights",
          },
        ],
        responses: {
          "200": {
            description: "OK",
            headers: {
              "Content-Security-Policy": {
                schema: {
                  type: "string",
                  example:
                    "default-src 'self';base-uri 'self';font-src 'self' https: data:;form-action 'self';frame-ancestors 'self';img-src 'self' data:;object-src 'none';script-src 'self';script-src-attr 'none';style-src 'self' https: 'unsafe-inline';upgrade-insecure-requests",
                },
              },
              "Cross-Origin-Opener-Policy": {
                schema: {
                  type: "string",
                  example: "same-origin",
                },
              },
              "Cross-Origin-Resource-Policy": {
                schema: {
                  type: "string",
                  example: "same-origin",
                },
              },
              "Origin-Agent-Cluster": {
                schema: {
                  type: "string",
                  example: "?1",
                },
              },
              "Referrer-Policy": {
                schema: {
                  type: "string",
                  example: "no-referrer",
                },
              },
              "Strict-Transport-Security": {
                schema: {
                  type: "string",
                  example: "max-age=31536000; includeSubDomains",
                },
              },
              "X-Content-Type-Options": {
                schema: {
                  type: "string",
                  example: "nosniff",
                },
              },
              "X-DNS-Prefetch-Control": {
                schema: {
                  type: "string",
                  example: "off",
                },
              },
              "X-Download-Options": {
                schema: {
                  type: "string",
                  example: "noopen",
                },
              },
              "X-Frame-Options": {
                schema: {
                  type: "string",
                  example: "SAMEORIGIN",
                },
              },
              "X-Permitted-Cross-Domain-Policies": {
                schema: {
                  type: "string",
                  example: "none",
                },
              },
              "X-XSS-Protection": {
                schema: {
                  type: "integer",
                  example: "0",
                },
              },
              "Access-Control-Allow-Origin": {
                schema: {
                  type: "string",
                  example: "*",
                },
              },
              "Access-Control-Allow-Credentials": {
                schema: {
                  type: "boolean",
                  example: "true",
                },
              },
              "Content-Type": {
                schema: {
                  type: "string",
                  example: "application/json; charset=utf-8",
                },
              },
              "Content-Length": {
                schema: {
                  type: "integer",
                  example: "167",
                },
              },
              ETag: {
                schema: {
                  type: "string",
                  example: 'W/"a7-XHDe6QByYRmndUmn9ZRLada5XR4"',
                },
              },
              Date: {
                schema: {
                  type: "string",
                  example: "Sat, 20 Dec 2025 14:30:55 GMT",
                },
              },
              Connection: {
                schema: {
                  type: "string",
                  example: "keep-alive",
                },
              },
              "Keep-Alive": {
                schema: {
                  type: "string",
                  example: "timeout=5",
                },
              },
            },
            content: {
              "text/plain": {
                schema: {
                  type: "string",
                },
                examples: {
                  "example-0": {
                    summary: "no relevant note",
                    value:
                      '{\n    "success": true,\n    "data": [],\n    "message": "Search results retrieved successfully",\n    "error": null,\n    "meta": {\n        "total": 0,\n        "page": 1,\n        "limit": 1,\n        "totalPages": 0,\n        "searchQuery": "11111111"\n    }\n}',
                  },
                  "example-1": {
                    summary: "success search",
                    value:
                      '{\n    "success": true,\n    "data": [\n        {\n            "id": "6ff1379d-5262-4d7e-91b0-8e579368dda7",\n            "title": "drd",\n            "version": 1,\n            "userId": 2,\n            "createdAt": "2025-12-20T14:16:48.792Z",\n            "updatedAt": "2025-12-20T14:16:48.792Z"\n        }\n    ],\n    "message": "Search results retrieved successfully",\n    "error": null,\n    "meta": {\n        "total": 1,\n        "page": 1,\n        "limit": 1,\n        "totalPages": 1,\n        "searchQuery": "lorem"\n    }\n}',
                  },
                },
              },
            },
          },
        },
      },
    },
    "/notes/{noteId}/versions": {
      get: {
        tags: ["Notes"],
        summary: "get note versions",
        parameters: [
          {
            name: "noteId",
            in: "path",
            schema: {
              type: "string",
            },
            required: true,
          },
        ],
        responses: {
          "200": {
            description: "OK",
            headers: {
              "Content-Security-Policy": {
                schema: {
                  type: "string",
                  example:
                    "default-src 'self';base-uri 'self';font-src 'self' https: data:;form-action 'self';frame-ancestors 'self';img-src 'self' data:;object-src 'none';script-src 'self';script-src-attr 'none';style-src 'self' https: 'unsafe-inline';upgrade-insecure-requests",
                },
              },
              "Cross-Origin-Opener-Policy": {
                schema: {
                  type: "string",
                  example: "same-origin",
                },
              },
              "Cross-Origin-Resource-Policy": {
                schema: {
                  type: "string",
                  example: "same-origin",
                },
              },
              "Origin-Agent-Cluster": {
                schema: {
                  type: "string",
                  example: "?1",
                },
              },
              "Referrer-Policy": {
                schema: {
                  type: "string",
                  example: "no-referrer",
                },
              },
              "Strict-Transport-Security": {
                schema: {
                  type: "string",
                  example: "max-age=31536000; includeSubDomains",
                },
              },
              "X-Content-Type-Options": {
                schema: {
                  type: "string",
                  example: "nosniff",
                },
              },
              "X-DNS-Prefetch-Control": {
                schema: {
                  type: "string",
                  example: "off",
                },
              },
              "X-Download-Options": {
                schema: {
                  type: "string",
                  example: "noopen",
                },
              },
              "X-Frame-Options": {
                schema: {
                  type: "string",
                  example: "SAMEORIGIN",
                },
              },
              "X-Permitted-Cross-Domain-Policies": {
                schema: {
                  type: "string",
                  example: "none",
                },
              },
              "X-XSS-Protection": {
                schema: {
                  type: "integer",
                  example: "0",
                },
              },
              "Access-Control-Allow-Origin": {
                schema: {
                  type: "string",
                  example: "*",
                },
              },
              "Access-Control-Allow-Credentials": {
                schema: {
                  type: "boolean",
                  example: "true",
                },
              },
              "Content-Type": {
                schema: {
                  type: "string",
                  example: "application/json; charset=utf-8",
                },
              },
              "Content-Length": {
                schema: {
                  type: "integer",
                  example: "902",
                },
              },
              ETag: {
                schema: {
                  type: "string",
                  example: 'W/"386-k3wuSj5/RynZ4VBoI4PvdQR7ELE"',
                },
              },
              Date: {
                schema: {
                  type: "string",
                  example: "Sat, 20 Dec 2025 19:59:56 GMT",
                },
              },
              Connection: {
                schema: {
                  type: "string",
                  example: "keep-alive",
                },
              },
              "Keep-Alive": {
                schema: {
                  type: "string",
                  example: "timeout=5",
                },
              },
            },
            content: {
              "text/plain": {
                schema: {
                  type: "string",
                },
                example:
                  '{\n    "success": true,\n    "data": [\n        {\n            "id": "a608b5c3-07d2-41b1-9cfb-0674097256dd",\n            "noteId": "f7b7b5f8-27c2-4369-9782-2bb9d3539235",\n            "title": "C_O_P",\n            "content": "when you look into the abyss, the abyss looks back into you",\n            "versionNumber": 3,\n            "createdAt": "2025-12-20T19:56:51.484Z",\n            "createdBy": 2,\n            "changeDescription": "testing"\n        },\n        {\n            "id": "4412c4e2-3581-446c-a7cf-79bc2b0b124f",\n            "noteId": "f7b7b5f8-27c2-4369-9782-2bb9d3539235",\n            "title": "C_O_P",\n            "content": "the only thing you have to fear is fear itself",\n            "versionNumber": 2,\n            "createdAt": "2025-12-20T14:40:45.111Z",\n            "createdBy": 2,\n            "changeDescription": null\n        },\n        {\n            "id": "483218d1-cf5c-456a-aa3e-bdd3a461ba45",\n            "noteId": "f7b7b5f8-27c2-4369-9782-2bb9d3539235",\n            "title": "C_O_P",\n            "content": "the only thing you have to fear is fear itslef",\n            "versionNumber": 1,\n            "createdAt": "2025-12-20T14:39:41.708Z",\n            "createdBy": 2,\n            "changeDescription": null\n        }\n    ],\n    "message": "Version history retrieved successfully",\n    "error": null\n}',
              },
            },
          },
        },
      },
    },
    "/notes/{noteId}": {
      get: {
        tags: ["Notes"],
        summary: "get note details",
        parameters: [
          {
            name: "noteId",
            in: "path",
            schema: {
              type: "string",
            },
            required: true,
          },
        ],
        responses: {
          "200": {
            description: "OK",
            headers: {
              "Content-Security-Policy": {
                schema: {
                  type: "string",
                  example:
                    "default-src 'self';base-uri 'self';font-src 'self' https: data:;form-action 'self';frame-ancestors 'self';img-src 'self' data:;object-src 'none';script-src 'self';script-src-attr 'none';style-src 'self' https: 'unsafe-inline';upgrade-insecure-requests",
                },
              },
              "Cross-Origin-Opener-Policy": {
                schema: {
                  type: "string",
                  example: "same-origin",
                },
              },
              "Cross-Origin-Resource-Policy": {
                schema: {
                  type: "string",
                  example: "same-origin",
                },
              },
              "Origin-Agent-Cluster": {
                schema: {
                  type: "string",
                  example: "?1",
                },
              },
              "Referrer-Policy": {
                schema: {
                  type: "string",
                  example: "no-referrer",
                },
              },
              "Strict-Transport-Security": {
                schema: {
                  type: "string",
                  example: "max-age=31536000; includeSubDomains",
                },
              },
              "X-Content-Type-Options": {
                schema: {
                  type: "string",
                  example: "nosniff",
                },
              },
              "X-DNS-Prefetch-Control": {
                schema: {
                  type: "string",
                  example: "off",
                },
              },
              "X-Download-Options": {
                schema: {
                  type: "string",
                  example: "noopen",
                },
              },
              "X-Frame-Options": {
                schema: {
                  type: "string",
                  example: "SAMEORIGIN",
                },
              },
              "X-Permitted-Cross-Domain-Policies": {
                schema: {
                  type: "string",
                  example: "none",
                },
              },
              "X-XSS-Protection": {
                schema: {
                  type: "integer",
                  example: "0",
                },
              },
              "Access-Control-Allow-Origin": {
                schema: {
                  type: "string",
                  example: "*",
                },
              },
              "Access-Control-Allow-Credentials": {
                schema: {
                  type: "boolean",
                  example: "true",
                },
              },
              ETag: {
                schema: {
                  type: "string",
                  example: '"1"',
                },
              },
              "Content-Type": {
                schema: {
                  type: "string",
                  example: "application/json; charset=utf-8",
                },
              },
              "Content-Length": {
                schema: {
                  type: "integer",
                  example: "730",
                },
              },
              Date: {
                schema: {
                  type: "string",
                  example: "Sat, 20 Dec 2025 14:18:15 GMT",
                },
              },
              Connection: {
                schema: {
                  type: "string",
                  example: "keep-alive",
                },
              },
              "Keep-Alive": {
                schema: {
                  type: "string",
                  example: "timeout=5",
                },
              },
            },
            content: {
              "text/plain": {
                schema: {
                  type: "string",
                },
                example:
                  '{\n    "success": true,\n    "data": {\n        "id": "6ff1379d-5262-4d7e-91b0-8e579368dda7",\n        "title": "drd",\n        "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",\n        "version": 1,\n        "isDeleted": false,\n        "deletedAt": null,\n        "userId": 2,\n        "createdAt": "2025-12-20T14:16:48.792Z",\n        "updatedAt": "2025-12-20T14:16:48.792Z"\n    },\n    "message": "Note retrieved successfully",\n    "error": null\n}',
              },
            },
          },
        },
      },
      put: {
        tags: ["Notes"],
        summary: "update note",
        requestBody: {
          content: {
            "application/json": {
              schema: {
                type: "object",
                example: {
                  title: "books",
                  content: "bastard of instanbul, kite runner, tale of two cities",
                },
              },
            },
          },
        },
        parameters: [
          {
            name: "If-Match",
            in: "header",
            schema: {
              type: "string",
            },
            example: "{{if-match}}",
          },
          {
            name: "noteId",
            in: "path",
            schema: {
              type: "string",
            },
            required: true,
          },
        ],
        responses: {
          "200": {
            description: "OK",
            headers: {
              "Content-Security-Policy": {
                schema: {
                  type: "string",
                  example:
                    "default-src 'self';base-uri 'self';font-src 'self' https: data:;form-action 'self';frame-ancestors 'self';img-src 'self' data:;object-src 'none';script-src 'self';script-src-attr 'none';style-src 'self' https: 'unsafe-inline';upgrade-insecure-requests",
                },
              },
              "Cross-Origin-Opener-Policy": {
                schema: {
                  type: "string",
                  example: "same-origin",
                },
              },
              "Cross-Origin-Resource-Policy": {
                schema: {
                  type: "string",
                  example: "same-origin",
                },
              },
              "Origin-Agent-Cluster": {
                schema: {
                  type: "string",
                  example: "?1",
                },
              },
              "Referrer-Policy": {
                schema: {
                  type: "string",
                  example: "no-referrer",
                },
              },
              "Strict-Transport-Security": {
                schema: {
                  type: "string",
                  example: "max-age=31536000; includeSubDomains",
                },
              },
              "X-Content-Type-Options": {
                schema: {
                  type: "string",
                  example: "nosniff",
                },
              },
              "X-DNS-Prefetch-Control": {
                schema: {
                  type: "string",
                  example: "off",
                },
              },
              "X-Download-Options": {
                schema: {
                  type: "string",
                  example: "noopen",
                },
              },
              "X-Frame-Options": {
                schema: {
                  type: "string",
                  example: "SAMEORIGIN",
                },
              },
              "X-Permitted-Cross-Domain-Policies": {
                schema: {
                  type: "string",
                  example: "none",
                },
              },
              "X-XSS-Protection": {
                schema: {
                  type: "integer",
                  example: "0",
                },
              },
              "Access-Control-Allow-Origin": {
                schema: {
                  type: "string",
                  example: "*",
                },
              },
              "Access-Control-Allow-Credentials": {
                schema: {
                  type: "boolean",
                  example: "true",
                },
              },
              ETag: {
                schema: {
                  type: "string",
                  example: '"2"',
                },
              },
              "Content-Type": {
                schema: {
                  type: "string",
                  example: "application/json; charset=utf-8",
                },
              },
              "Content-Length": {
                schema: {
                  type: "integer",
                  example: "728",
                },
              },
              Date: {
                schema: {
                  type: "string",
                  example: "Sat, 20 Dec 2025 14:35:49 GMT",
                },
              },
              Connection: {
                schema: {
                  type: "string",
                  example: "keep-alive",
                },
              },
              "Keep-Alive": {
                schema: {
                  type: "string",
                  example: "timeout=5",
                },
              },
            },
            content: {
              "text/plain": {
                schema: {
                  type: "string",
                },
                example:
                  '{\n    "success": true,\n    "data": {\n        "id": "6ff1379d-5262-4d7e-91b0-8e579368dda7",\n        "title": "drd",\n        "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",\n        "version": 2,\n        "isDeleted": false,\n        "deletedAt": null,\n        "userId": 2,\n        "createdAt": "2025-12-20T14:16:48.792Z",\n        "updatedAt": "2025-12-20T14:35:49.741Z"\n    },\n    "message": "Note updated successfully",\n    "error": null\n}',
              },
            },
          },
          "428": {
            description: "Precondition Required",
            headers: {
              "Content-Security-Policy": {
                schema: {
                  type: "string",
                  example:
                    "default-src 'self';base-uri 'self';font-src 'self' https: data:;form-action 'self';frame-ancestors 'self';img-src 'self' data:;object-src 'none';script-src 'self';script-src-attr 'none';style-src 'self' https: 'unsafe-inline';upgrade-insecure-requests",
                },
              },
              "Cross-Origin-Opener-Policy": {
                schema: {
                  type: "string",
                  example: "same-origin",
                },
              },
              "Cross-Origin-Resource-Policy": {
                schema: {
                  type: "string",
                  example: "same-origin",
                },
              },
              "Origin-Agent-Cluster": {
                schema: {
                  type: "string",
                  example: "?1",
                },
              },
              "Referrer-Policy": {
                schema: {
                  type: "string",
                  example: "no-referrer",
                },
              },
              "Strict-Transport-Security": {
                schema: {
                  type: "string",
                  example: "max-age=31536000; includeSubDomains",
                },
              },
              "X-Content-Type-Options": {
                schema: {
                  type: "string",
                  example: "nosniff",
                },
              },
              "X-DNS-Prefetch-Control": {
                schema: {
                  type: "string",
                  example: "off",
                },
              },
              "X-Download-Options": {
                schema: {
                  type: "string",
                  example: "noopen",
                },
              },
              "X-Frame-Options": {
                schema: {
                  type: "string",
                  example: "SAMEORIGIN",
                },
              },
              "X-Permitted-Cross-Domain-Policies": {
                schema: {
                  type: "string",
                  example: "none",
                },
              },
              "X-XSS-Protection": {
                schema: {
                  type: "integer",
                  example: "0",
                },
              },
              "Access-Control-Allow-Origin": {
                schema: {
                  type: "string",
                  example: "*",
                },
              },
              "Access-Control-Allow-Credentials": {
                schema: {
                  type: "boolean",
                  example: "true",
                },
              },
              "Content-Type": {
                schema: {
                  type: "string",
                  example: "application/json; charset=utf-8",
                },
              },
              "Content-Length": {
                schema: {
                  type: "integer",
                  example: "193",
                },
              },
              ETag: {
                schema: {
                  type: "string",
                  example: 'W/"c1-KYISAfaPoF1oTtoyE2PqlJY9tro"',
                },
              },
              Date: {
                schema: {
                  type: "string",
                  example: "Sat, 20 Dec 2025 14:34:18 GMT",
                },
              },
              Connection: {
                schema: {
                  type: "string",
                  example: "keep-alive",
                },
              },
              "Keep-Alive": {
                schema: {
                  type: "string",
                  example: "timeout=5",
                },
              },
            },
            content: {
              "text/plain": {
                schema: {
                  type: "string",
                },
                example:
                  '{\n    "success": false,\n    "data": null,\n    "message": "If-Match header is required for this operation",\n    "error": [\n        {\n            "code": 428,\n            "messages": [\n                "If-Match header is required for this operation",\n                "An error occurred"\n            ]\n        }\n    ]\n}',
              },
            },
          },
        },
      },
      delete: {
        tags: ["Notes"],
        summary: "delete note",
        parameters: [
          {
            name: "If-Match",
            in: "header",
            schema: {
              type: "string",
            },
            example: "{{if-match}}",
          },
          {
            name: "noteId",
            in: "path",
            schema: {
              type: "string",
            },
            required: true,
          },
        ],
        responses: {
          "200": {
            description: "OK",
            headers: {
              "Content-Security-Policy": {
                schema: {
                  type: "string",
                  example:
                    "default-src 'self';base-uri 'self';font-src 'self' https: data:;form-action 'self';frame-ancestors 'self';img-src 'self' data:;object-src 'none';script-src 'self';script-src-attr 'none';style-src 'self' https: 'unsafe-inline';upgrade-insecure-requests",
                },
              },
              "Cross-Origin-Opener-Policy": {
                schema: {
                  type: "string",
                  example: "same-origin",
                },
              },
              "Cross-Origin-Resource-Policy": {
                schema: {
                  type: "string",
                  example: "same-origin",
                },
              },
              "Origin-Agent-Cluster": {
                schema: {
                  type: "string",
                  example: "?1",
                },
              },
              "Referrer-Policy": {
                schema: {
                  type: "string",
                  example: "no-referrer",
                },
              },
              "Strict-Transport-Security": {
                schema: {
                  type: "string",
                  example: "max-age=31536000; includeSubDomains",
                },
              },
              "X-Content-Type-Options": {
                schema: {
                  type: "string",
                  example: "nosniff",
                },
              },
              "X-DNS-Prefetch-Control": {
                schema: {
                  type: "string",
                  example: "off",
                },
              },
              "X-Download-Options": {
                schema: {
                  type: "string",
                  example: "noopen",
                },
              },
              "X-Frame-Options": {
                schema: {
                  type: "string",
                  example: "SAMEORIGIN",
                },
              },
              "X-Permitted-Cross-Domain-Policies": {
                schema: {
                  type: "string",
                  example: "none",
                },
              },
              "X-XSS-Protection": {
                schema: {
                  type: "integer",
                  example: "0",
                },
              },
              "Access-Control-Allow-Origin": {
                schema: {
                  type: "string",
                  example: "*",
                },
              },
              "Access-Control-Allow-Credentials": {
                schema: {
                  type: "boolean",
                  example: "true",
                },
              },
              "Content-Type": {
                schema: {
                  type: "string",
                  example: "application/json; charset=utf-8",
                },
              },
              "Content-Length": {
                schema: {
                  type: "integer",
                  example: "79",
                },
              },
              ETag: {
                schema: {
                  type: "string",
                  example: 'W/"4f-tM+QJnlgUE7F6OqgoacWAoHX1HE"',
                },
              },
              Date: {
                schema: {
                  type: "string",
                  example: "Sat, 20 Dec 2025 19:58:36 GMT",
                },
              },
              Connection: {
                schema: {
                  type: "string",
                  example: "keep-alive",
                },
              },
              "Keep-Alive": {
                schema: {
                  type: "string",
                  example: "timeout=5",
                },
              },
            },
            content: {
              "text/plain": {
                schema: {
                  type: "string",
                },
                example: '{\n    "success": true,\n    "data": null,\n    "message": "Note deleted successfully",\n    "error": null\n}',
              },
            },
          },
        },
      },
    },
    "/notes/{noteId}/revert": {
      post: {
        tags: ["Notes"],
        summary: "revert note version",
        requestBody: {
          content: {
            "application/json": {
              schema: {
                type: "object",
                example: {
                  versionNumber: 2,
                  changeDescription: "testing",
                },
              },
            },
          },
        },
        parameters: [
          {
            name: "If-Match",
            in: "header",
            schema: {
              type: "string",
            },
            example: "{{if-match}}",
          },
          {
            name: "noteId",
            in: "path",
            schema: {
              type: "string",
            },
            required: true,
          },
        ],
        responses: {
          "200": {
            description: "OK",
            headers: {
              "Content-Security-Policy": {
                schema: {
                  type: "string",
                  example:
                    "default-src 'self';base-uri 'self';font-src 'self' https: data:;form-action 'self';frame-ancestors 'self';img-src 'self' data:;object-src 'none';script-src 'self';script-src-attr 'none';style-src 'self' https: 'unsafe-inline';upgrade-insecure-requests",
                },
              },
              "Cross-Origin-Opener-Policy": {
                schema: {
                  type: "string",
                  example: "same-origin",
                },
              },
              "Cross-Origin-Resource-Policy": {
                schema: {
                  type: "string",
                  example: "same-origin",
                },
              },
              "Origin-Agent-Cluster": {
                schema: {
                  type: "string",
                  example: "?1",
                },
              },
              "Referrer-Policy": {
                schema: {
                  type: "string",
                  example: "no-referrer",
                },
              },
              "Strict-Transport-Security": {
                schema: {
                  type: "string",
                  example: "max-age=31536000; includeSubDomains",
                },
              },
              "X-Content-Type-Options": {
                schema: {
                  type: "string",
                  example: "nosniff",
                },
              },
              "X-DNS-Prefetch-Control": {
                schema: {
                  type: "string",
                  example: "off",
                },
              },
              "X-Download-Options": {
                schema: {
                  type: "string",
                  example: "noopen",
                },
              },
              "X-Frame-Options": {
                schema: {
                  type: "string",
                  example: "SAMEORIGIN",
                },
              },
              "X-Permitted-Cross-Domain-Policies": {
                schema: {
                  type: "string",
                  example: "none",
                },
              },
              "X-XSS-Protection": {
                schema: {
                  type: "integer",
                  example: "0",
                },
              },
              "Access-Control-Allow-Origin": {
                schema: {
                  type: "string",
                  example: "*",
                },
              },
              "Access-Control-Allow-Credentials": {
                schema: {
                  type: "boolean",
                  example: "true",
                },
              },
              ETag: {
                schema: {
                  type: "string",
                  example: '"4"',
                },
              },
              "Content-Type": {
                schema: {
                  type: "string",
                  example: "application/json; charset=utf-8",
                },
              },
              "Content-Length": {
                schema: {
                  type: "integer",
                  example: "345",
                },
              },
              Date: {
                schema: {
                  type: "string",
                  example: "Sat, 20 Dec 2025 19:56:51 GMT",
                },
              },
              Connection: {
                schema: {
                  type: "string",
                  example: "keep-alive",
                },
              },
              "Keep-Alive": {
                schema: {
                  type: "string",
                  example: "timeout=5",
                },
              },
            },
            content: {
              "text/plain": {
                schema: {
                  type: "string",
                },
                example:
                  '{\n    "success": true,\n    "data": {\n        "id": "f7b7b5f8-27c2-4369-9782-2bb9d3539235",\n        "title": "C_O_P",\n        "content": "the only thing you have to fear is fear itself",\n        "version": 4,\n        "isDeleted": false,\n        "deletedAt": null,\n        "userId": 2,\n        "createdAt": "2025-12-20T14:37:57.936Z",\n        "updatedAt": "2025-12-20T19:56:51.489Z"\n    },\n    "message": "Note reverted to version 2 successfully",\n    "error": null\n}',
              },
            },
          },
        },
      },
    },
    "/notes/search-versions": {
      get: {
        tags: ["Notes"],
        summary: "search notes versions",
        parameters: [
          {
            name: "page",
            in: "query",
            schema: {
              type: "integer",
            },
            example: "1",
          },
          {
            name: "limit",
            in: "query",
            schema: {
              type: "integer",
            },
            example: "10",
          },
          {
            name: "q",
            in: "query",
            schema: {
              type: "string",
            },
            example: "kane",
          },
        ],
        responses: {
          "200": {
            description: "OK",
            headers: {
              "Content-Security-Policy": {
                schema: {
                  type: "string",
                  example:
                    "default-src 'self';base-uri 'self';font-src 'self' https: data:;form-action 'self';frame-ancestors 'self';img-src 'self' data:;object-src 'none';script-src 'self';script-src-attr 'none';style-src 'self' https: 'unsafe-inline';upgrade-insecure-requests",
                },
              },
              "Cross-Origin-Opener-Policy": {
                schema: {
                  type: "string",
                  example: "same-origin",
                },
              },
              "Cross-Origin-Resource-Policy": {
                schema: {
                  type: "string",
                  example: "same-origin",
                },
              },
              "Origin-Agent-Cluster": {
                schema: {
                  type: "string",
                  example: "?1",
                },
              },
              "Referrer-Policy": {
                schema: {
                  type: "string",
                  example: "no-referrer",
                },
              },
              "Strict-Transport-Security": {
                schema: {
                  type: "string",
                  example: "max-age=31536000; includeSubDomains",
                },
              },
              "X-Content-Type-Options": {
                schema: {
                  type: "string",
                  example: "nosniff",
                },
              },
              "X-DNS-Prefetch-Control": {
                schema: {
                  type: "string",
                  example: "off",
                },
              },
              "X-Download-Options": {
                schema: {
                  type: "string",
                  example: "noopen",
                },
              },
              "X-Frame-Options": {
                schema: {
                  type: "string",
                  example: "SAMEORIGIN",
                },
              },
              "X-Permitted-Cross-Domain-Policies": {
                schema: {
                  type: "string",
                  example: "none",
                },
              },
              "X-XSS-Protection": {
                schema: {
                  type: "integer",
                  example: "0",
                },
              },
              "Access-Control-Allow-Origin": {
                schema: {
                  type: "string",
                  example: "*",
                },
              },
              "Access-Control-Allow-Credentials": {
                schema: {
                  type: "boolean",
                  example: "true",
                },
              },
              "Content-Type": {
                schema: {
                  type: "string",
                  example: "application/json; charset=utf-8",
                },
              },
              "Content-Length": {
                schema: {
                  type: "integer",
                  example: "583",
                },
              },
              ETag: {
                schema: {
                  type: "string",
                  example: 'W/"247-zLK+7wGkl1HZ6qDg3e4XTQdkYRI"',
                },
              },
              Date: {
                schema: {
                  type: "string",
                  example: "Sat, 20 Dec 2025 14:49:00 GMT",
                },
              },
              Connection: {
                schema: {
                  type: "string",
                  example: "keep-alive",
                },
              },
              "Keep-Alive": {
                schema: {
                  type: "string",
                  example: "timeout=5",
                },
              },
            },
            content: {
              "text/plain": {
                schema: {
                  type: "string",
                },
                example:
                  '{\n    "success": true,\n    "data": [\n        {\n            "id": "4412c4e2-3581-446c-a7cf-79bc2b0b124f",\n            "noteId": "f7b7b5f8-27c2-4369-9782-2bb9d3539235",\n            "title": "C_O_P",\n            "versionNumber": 2,\n            "createdAt": "2025-12-20T14:40:45.111Z",\n            "createdBy": 2,\n            "changeDescription": null\n        },\n        {\n            "id": "483218d1-cf5c-456a-aa3e-bdd3a461ba45",\n            "noteId": "f7b7b5f8-27c2-4369-9782-2bb9d3539235",\n            "title": "C_O_P",\n            "versionNumber": 1,\n            "createdAt": "2025-12-20T14:39:41.708Z",\n            "createdBy": 2,\n            "changeDescription": null\n        }\n    ],\n    "message": "Version search results retrieved successfully",\n    "error": null,\n    "meta": {\n        "total": 2,\n        "page": 1,\n        "limit": 10,\n        "totalPages": 1,\n        "searchQuery": "fear"\n    }\n}',
              },
            },
          },
        },
      },
    },
    "/note-share/{noteId}/collaborators": {
      get: {
        tags: ["NotesSharing"],
        summary: "get collaborators",
        parameters: [
          {
            name: "noteId",
            in: "path",
            schema: {
              type: "string",
            },
            required: true,
          },
        ],
        responses: {
          "200": {
            description: "OK",
            headers: {
              "Content-Security-Policy": {
                schema: {
                  type: "string",
                  example:
                    "default-src 'self';base-uri 'self';font-src 'self' https: data:;form-action 'self';frame-ancestors 'self';img-src 'self' data:;object-src 'none';script-src 'self';script-src-attr 'none';style-src 'self' https: 'unsafe-inline';upgrade-insecure-requests",
                },
              },
              "Cross-Origin-Opener-Policy": {
                schema: {
                  type: "string",
                  example: "same-origin",
                },
              },
              "Cross-Origin-Resource-Policy": {
                schema: {
                  type: "string",
                  example: "same-origin",
                },
              },
              "Origin-Agent-Cluster": {
                schema: {
                  type: "string",
                  example: "?1",
                },
              },
              "Referrer-Policy": {
                schema: {
                  type: "string",
                  example: "no-referrer",
                },
              },
              "Strict-Transport-Security": {
                schema: {
                  type: "string",
                  example: "max-age=31536000; includeSubDomains",
                },
              },
              "X-Content-Type-Options": {
                schema: {
                  type: "string",
                  example: "nosniff",
                },
              },
              "X-DNS-Prefetch-Control": {
                schema: {
                  type: "string",
                  example: "off",
                },
              },
              "X-Download-Options": {
                schema: {
                  type: "string",
                  example: "noopen",
                },
              },
              "X-Frame-Options": {
                schema: {
                  type: "string",
                  example: "SAMEORIGIN",
                },
              },
              "X-Permitted-Cross-Domain-Policies": {
                schema: {
                  type: "string",
                  example: "none",
                },
              },
              "X-XSS-Protection": {
                schema: {
                  type: "integer",
                  example: "0",
                },
              },
              "Access-Control-Allow-Origin": {
                schema: {
                  type: "string",
                  example: "*",
                },
              },
              "Access-Control-Allow-Credentials": {
                schema: {
                  type: "boolean",
                  example: "true",
                },
              },
              "Content-Type": {
                schema: {
                  type: "string",
                  example: "application/json; charset=utf-8",
                },
              },
              "Content-Length": {
                schema: {
                  type: "integer",
                  example: "308",
                },
              },
              ETag: {
                schema: {
                  type: "string",
                  example: 'W/"134-uN88z7j7iycZbfacrlYtn0+jdRQ"',
                },
              },
              Date: {
                schema: {
                  type: "string",
                  example: "Sun, 21 Dec 2025 09:58:06 GMT",
                },
              },
              Connection: {
                schema: {
                  type: "string",
                  example: "keep-alive",
                },
              },
              "Keep-Alive": {
                schema: {
                  type: "string",
                  example: "timeout=5",
                },
              },
            },
            content: {
              "text/plain": {
                schema: {
                  type: "string",
                },
                example:
                  '{\n    "success": true,\n    "data": [\n        {\n            "id": "4b3b2dea-3e34-45a7-8cde-a00a89fe896d",\n            "noteId": "3aa2b17f-cb07-438b-83ee-fe71a8fc7fd6",\n            "sharedWithEmail": "jeandoe@maildrop.cc",\n            "sharedWithName": "John Doe",\n            "permission": "READ",\n            "createdAt": "2025-12-21T09:49:27.451Z"\n        }\n    ],\n    "message": "Collaborators retrieved successfully",\n    "error": null\n}',
              },
            },
          },
          "404": {
            description: "Not Found",
            headers: {
              "Content-Security-Policy": {
                schema: {
                  type: "string",
                  example:
                    "default-src 'self';base-uri 'self';font-src 'self' https: data:;form-action 'self';frame-ancestors 'self';img-src 'self' data:;object-src 'none';script-src 'self';script-src-attr 'none';style-src 'self' https: 'unsafe-inline';upgrade-insecure-requests",
                },
              },
              "Cross-Origin-Opener-Policy": {
                schema: {
                  type: "string",
                  example: "same-origin",
                },
              },
              "Cross-Origin-Resource-Policy": {
                schema: {
                  type: "string",
                  example: "same-origin",
                },
              },
              "Origin-Agent-Cluster": {
                schema: {
                  type: "string",
                  example: "?1",
                },
              },
              "Referrer-Policy": {
                schema: {
                  type: "string",
                  example: "no-referrer",
                },
              },
              "Strict-Transport-Security": {
                schema: {
                  type: "string",
                  example: "max-age=31536000; includeSubDomains",
                },
              },
              "X-Content-Type-Options": {
                schema: {
                  type: "string",
                  example: "nosniff",
                },
              },
              "X-DNS-Prefetch-Control": {
                schema: {
                  type: "string",
                  example: "off",
                },
              },
              "X-Download-Options": {
                schema: {
                  type: "string",
                  example: "noopen",
                },
              },
              "X-Frame-Options": {
                schema: {
                  type: "string",
                  example: "SAMEORIGIN",
                },
              },
              "X-Permitted-Cross-Domain-Policies": {
                schema: {
                  type: "string",
                  example: "none",
                },
              },
              "X-XSS-Protection": {
                schema: {
                  type: "integer",
                  example: "0",
                },
              },
              "Access-Control-Allow-Origin": {
                schema: {
                  type: "string",
                  example: "*",
                },
              },
              "Access-Control-Allow-Credentials": {
                schema: {
                  type: "boolean",
                  example: "true",
                },
              },
              "Content-Type": {
                schema: {
                  type: "string",
                  example: "application/json; charset=utf-8",
                },
              },
              "Content-Length": {
                schema: {
                  type: "integer",
                  example: "129",
                },
              },
              ETag: {
                schema: {
                  type: "string",
                  example: 'W/"81-Ov3JB/WGl/QCloVtIYp8vB8bjyw"',
                },
              },
              Date: {
                schema: {
                  type: "string",
                  example: "Sun, 21 Dec 2025 09:25:36 GMT",
                },
              },
              Connection: {
                schema: {
                  type: "string",
                  example: "keep-alive",
                },
              },
              "Keep-Alive": {
                schema: {
                  type: "string",
                  example: "timeout=5",
                },
              },
            },
            content: {
              "text/plain": {
                schema: {
                  type: "string",
                },
                example:
                  '{\n    "success": false,\n    "data": null,\n    "message": "Note not found",\n    "error": [\n        {\n            "code": 404,\n            "messages": [\n                "Note not found",\n                "An error occurred"\n            ]\n        }\n    ]\n}',
              },
            },
          },
        },
      },
    },
    "/note-share/shared-with-me": {
      get: {
        tags: ["NotesSharing"],
        summary: "notes shared with me",
        parameters: [
          {
            name: "page",
            in: "query",
            schema: {
              type: "integer",
            },
            example: "1",
          },
          {
            name: "limit",
            in: "query",
            schema: {
              type: "integer",
            },
            example: "5",
          },
        ],
        responses: {
          "200": {
            description: "OK",
            headers: {
              "Content-Security-Policy": {
                schema: {
                  type: "string",
                  example:
                    "default-src 'self';base-uri 'self';font-src 'self' https: data:;form-action 'self';frame-ancestors 'self';img-src 'self' data:;object-src 'none';script-src 'self';script-src-attr 'none';style-src 'self' https: 'unsafe-inline';upgrade-insecure-requests",
                },
              },
              "Cross-Origin-Opener-Policy": {
                schema: {
                  type: "string",
                  example: "same-origin",
                },
              },
              "Cross-Origin-Resource-Policy": {
                schema: {
                  type: "string",
                  example: "same-origin",
                },
              },
              "Origin-Agent-Cluster": {
                schema: {
                  type: "string",
                  example: "?1",
                },
              },
              "Referrer-Policy": {
                schema: {
                  type: "string",
                  example: "no-referrer",
                },
              },
              "Strict-Transport-Security": {
                schema: {
                  type: "string",
                  example: "max-age=31536000; includeSubDomains",
                },
              },
              "X-Content-Type-Options": {
                schema: {
                  type: "string",
                  example: "nosniff",
                },
              },
              "X-DNS-Prefetch-Control": {
                schema: {
                  type: "string",
                  example: "off",
                },
              },
              "X-Download-Options": {
                schema: {
                  type: "string",
                  example: "noopen",
                },
              },
              "X-Frame-Options": {
                schema: {
                  type: "string",
                  example: "SAMEORIGIN",
                },
              },
              "X-Permitted-Cross-Domain-Policies": {
                schema: {
                  type: "string",
                  example: "none",
                },
              },
              "X-XSS-Protection": {
                schema: {
                  type: "integer",
                  example: "0",
                },
              },
              "Access-Control-Allow-Origin": {
                schema: {
                  type: "string",
                  example: "*",
                },
              },
              "Access-Control-Allow-Credentials": {
                schema: {
                  type: "boolean",
                  example: "true",
                },
              },
              "Content-Type": {
                schema: {
                  type: "string",
                  example: "application/json; charset=utf-8",
                },
              },
              "Content-Length": {
                schema: {
                  type: "integer",
                  example: "359",
                },
              },
              ETag: {
                schema: {
                  type: "string",
                  example: 'W/"167-PzkkxHVevI9vQX5l4WClyqa7/+8"',
                },
              },
              Date: {
                schema: {
                  type: "string",
                  example: "Sun, 21 Dec 2025 09:25:41 GMT",
                },
              },
              Connection: {
                schema: {
                  type: "string",
                  example: "keep-alive",
                },
              },
              "Keep-Alive": {
                schema: {
                  type: "string",
                  example: "timeout=5",
                },
              },
            },
            content: {
              "text/plain": {
                schema: {
                  type: "string",
                },
                example:
                  '{\n    "success": true,\n    "data": [\n        {\n            "noteId": "04e27e86-de92-4dfa-9045-67e2c8d3421a",\n            "title": "Done",\n            "ownerEmail": "johndoe@maildrop.cc",\n            "ownerName": "John Doe",\n            "permission": "READ",\n            "sharedAt": "2025-12-21T09:18:21.240Z",\n            "updatedAt": "2025-12-21T06:53:58.533Z"\n        }\n    ],\n    "message": "Shared notes retrieved successfully",\n    "error": null,\n    "meta": {\n        "total": 1,\n        "page": 1,\n        "limit": 5,\n        "totalPages": 1\n    }\n}',
              },
            },
          },
        },
      },
    },
    "/note-share/{noteId}/share": {
      post: {
        tags: ["NotesSharing"],
        summary: "share note with user",
        requestBody: {
          content: {
            "application/json": {
              schema: {
                type: "object",
                example: {
                  email: "test@maildrop.cc",
                  permission: "READ",
                },
              },
            },
          },
        },
        parameters: [
          {
            name: "noteId",
            in: "path",
            schema: {
              type: "string",
            },
            required: true,
          },
        ],
        responses: {
          "201": {
            description: "Created",
            headers: {
              "Content-Security-Policy": {
                schema: {
                  type: "string",
                  example:
                    "default-src 'self';base-uri 'self';font-src 'self' https: data:;form-action 'self';frame-ancestors 'self';img-src 'self' data:;object-src 'none';script-src 'self';script-src-attr 'none';style-src 'self' https: 'unsafe-inline';upgrade-insecure-requests",
                },
              },
              "Cross-Origin-Opener-Policy": {
                schema: {
                  type: "string",
                  example: "same-origin",
                },
              },
              "Cross-Origin-Resource-Policy": {
                schema: {
                  type: "string",
                  example: "same-origin",
                },
              },
              "Origin-Agent-Cluster": {
                schema: {
                  type: "string",
                  example: "?1",
                },
              },
              "Referrer-Policy": {
                schema: {
                  type: "string",
                  example: "no-referrer",
                },
              },
              "Strict-Transport-Security": {
                schema: {
                  type: "string",
                  example: "max-age=31536000; includeSubDomains",
                },
              },
              "X-Content-Type-Options": {
                schema: {
                  type: "string",
                  example: "nosniff",
                },
              },
              "X-DNS-Prefetch-Control": {
                schema: {
                  type: "string",
                  example: "off",
                },
              },
              "X-Download-Options": {
                schema: {
                  type: "string",
                  example: "noopen",
                },
              },
              "X-Frame-Options": {
                schema: {
                  type: "string",
                  example: "SAMEORIGIN",
                },
              },
              "X-Permitted-Cross-Domain-Policies": {
                schema: {
                  type: "string",
                  example: "none",
                },
              },
              "X-XSS-Protection": {
                schema: {
                  type: "integer",
                  example: "0",
                },
              },
              "Access-Control-Allow-Origin": {
                schema: {
                  type: "string",
                  example: "*",
                },
              },
              "Access-Control-Allow-Credentials": {
                schema: {
                  type: "boolean",
                  example: "true",
                },
              },
              "Content-Type": {
                schema: {
                  type: "string",
                  example: "application/json; charset=utf-8",
                },
              },
              "Content-Length": {
                schema: {
                  type: "integer",
                  example: "298",
                },
              },
              ETag: {
                schema: {
                  type: "string",
                  example: 'W/"12a-sQfMIiXzj+WtGkXPo507PQBgSAM"',
                },
              },
              Date: {
                schema: {
                  type: "string",
                  example: "Sun, 21 Dec 2025 09:57:24 GMT",
                },
              },
              Connection: {
                schema: {
                  type: "string",
                  example: "keep-alive",
                },
              },
              "Keep-Alive": {
                schema: {
                  type: "string",
                  example: "timeout=5",
                },
              },
            },
            content: {
              "text/plain": {
                schema: {
                  type: "string",
                },
                example:
                  '{\n    "success": true,\n    "data": {\n        "id": "603cb57d-0e55-429e-89a5-6b4798aace3a",\n        "noteId": "3aa2b17f-cb07-438b-83ee-fe71a8fc7fd6",\n        "sharedWithEmail": "test@maildrop.cc",\n        "sharedWithName": "Abdullah Safwan",\n        "permission": "READ",\n        "createdAt": "2025-12-21T09:57:24.437Z"\n    },\n    "message": "Note shared successfully",\n    "error": null\n}',
              },
            },
          },
        },
      },
    },
    "/note-share/{noteId}/share/{shareId}": {
      put: {
        tags: ["NotesSharing"],
        summary: "update permission",
        requestBody: {
          content: {
            "application/json": {
              schema: {
                type: "object",
                example: {
                  permission: "READ",
                },
              },
            },
          },
        },
        parameters: [
          {
            name: "noteId",
            in: "path",
            schema: {
              type: "string",
            },
            required: true,
          },
          {
            name: "shareId",
            in: "path",
            schema: {
              type: "string",
            },
            required: true,
          },
        ],
        responses: {
          "200": {
            description: "OK",
            headers: {
              "Content-Security-Policy": {
                schema: {
                  type: "string",
                  example:
                    "default-src 'self';base-uri 'self';font-src 'self' https: data:;form-action 'self';frame-ancestors 'self';img-src 'self' data:;object-src 'none';script-src 'self';script-src-attr 'none';style-src 'self' https: 'unsafe-inline';upgrade-insecure-requests",
                },
              },
              "Cross-Origin-Opener-Policy": {
                schema: {
                  type: "string",
                  example: "same-origin",
                },
              },
              "Cross-Origin-Resource-Policy": {
                schema: {
                  type: "string",
                  example: "same-origin",
                },
              },
              "Origin-Agent-Cluster": {
                schema: {
                  type: "string",
                  example: "?1",
                },
              },
              "Referrer-Policy": {
                schema: {
                  type: "string",
                  example: "no-referrer",
                },
              },
              "Strict-Transport-Security": {
                schema: {
                  type: "string",
                  example: "max-age=31536000; includeSubDomains",
                },
              },
              "X-Content-Type-Options": {
                schema: {
                  type: "string",
                  example: "nosniff",
                },
              },
              "X-DNS-Prefetch-Control": {
                schema: {
                  type: "string",
                  example: "off",
                },
              },
              "X-Download-Options": {
                schema: {
                  type: "string",
                  example: "noopen",
                },
              },
              "X-Frame-Options": {
                schema: {
                  type: "string",
                  example: "SAMEORIGIN",
                },
              },
              "X-Permitted-Cross-Domain-Policies": {
                schema: {
                  type: "string",
                  example: "none",
                },
              },
              "X-XSS-Protection": {
                schema: {
                  type: "integer",
                  example: "0",
                },
              },
              "Access-Control-Allow-Origin": {
                schema: {
                  type: "string",
                  example: "*",
                },
              },
              "Access-Control-Allow-Credentials": {
                schema: {
                  type: "boolean",
                  example: "true",
                },
              },
              "Content-Type": {
                schema: {
                  type: "string",
                  example: "application/json; charset=utf-8",
                },
              },
              "Content-Length": {
                schema: {
                  type: "integer",
                  example: "301",
                },
              },
              ETag: {
                schema: {
                  type: "string",
                  example: 'W/"12d-BmurrkocQZtmAxAkQFwCFE2Sit0"',
                },
              },
              Date: {
                schema: {
                  type: "string",
                  example: "Sun, 21 Dec 2025 09:38:36 GMT",
                },
              },
              Connection: {
                schema: {
                  type: "string",
                  example: "keep-alive",
                },
              },
              "Keep-Alive": {
                schema: {
                  type: "string",
                  example: "timeout=5",
                },
              },
            },
            content: {
              "text/plain": {
                schema: {
                  type: "string",
                },
                example:
                  '{\n    "success": true,\n    "data": {\n        "id": "b6023f27-5202-4c9d-859d-52539f22af4a",\n        "noteId": "04e27e86-de92-4dfa-9045-67e2c8d3421a",\n        "sharedWithEmail": "jeandoe@maildrop.cc",\n        "sharedWithName": "John Doe",\n        "permission": "READ",\n        "createdAt": "2025-12-21T09:18:21.240Z"\n    },\n    "message": "Permission updated successfully",\n    "error": null\n}',
              },
            },
          },
          "404": {
            description: "Not Found",
            headers: {
              "Content-Security-Policy": {
                schema: {
                  type: "string",
                  example:
                    "default-src 'self';base-uri 'self';font-src 'self' https: data:;form-action 'self';frame-ancestors 'self';img-src 'self' data:;object-src 'none';script-src 'self';script-src-attr 'none';style-src 'self' https: 'unsafe-inline';upgrade-insecure-requests",
                },
              },
              "Cross-Origin-Opener-Policy": {
                schema: {
                  type: "string",
                  example: "same-origin",
                },
              },
              "Cross-Origin-Resource-Policy": {
                schema: {
                  type: "string",
                  example: "same-origin",
                },
              },
              "Origin-Agent-Cluster": {
                schema: {
                  type: "string",
                  example: "?1",
                },
              },
              "Referrer-Policy": {
                schema: {
                  type: "string",
                  example: "no-referrer",
                },
              },
              "Strict-Transport-Security": {
                schema: {
                  type: "string",
                  example: "max-age=31536000; includeSubDomains",
                },
              },
              "X-Content-Type-Options": {
                schema: {
                  type: "string",
                  example: "nosniff",
                },
              },
              "X-DNS-Prefetch-Control": {
                schema: {
                  type: "string",
                  example: "off",
                },
              },
              "X-Download-Options": {
                schema: {
                  type: "string",
                  example: "noopen",
                },
              },
              "X-Frame-Options": {
                schema: {
                  type: "string",
                  example: "SAMEORIGIN",
                },
              },
              "X-Permitted-Cross-Domain-Policies": {
                schema: {
                  type: "string",
                  example: "none",
                },
              },
              "X-XSS-Protection": {
                schema: {
                  type: "integer",
                  example: "0",
                },
              },
              "Access-Control-Allow-Origin": {
                schema: {
                  type: "string",
                  example: "*",
                },
              },
              "Access-Control-Allow-Credentials": {
                schema: {
                  type: "boolean",
                  example: "true",
                },
              },
              "Content-Type": {
                schema: {
                  type: "string",
                  example: "application/json; charset=utf-8",
                },
              },
              "Content-Length": {
                schema: {
                  type: "integer",
                  example: "177",
                },
              },
              ETag: {
                schema: {
                  type: "string",
                  example: 'W/"b1-Cww/DK+bQ2quGVunCrZb+QPIaC4"',
                },
              },
              Date: {
                schema: {
                  type: "string",
                  example: "Sun, 21 Dec 2025 09:36:40 GMT",
                },
              },
              Connection: {
                schema: {
                  type: "string",
                  example: "keep-alive",
                },
              },
              "Keep-Alive": {
                schema: {
                  type: "string",
                  example: "timeout=5",
                },
              },
            },
            content: {
              "text/plain": {
                schema: {
                  type: "string",
                },
                example:
                  '{\n    "success": false,\n    "data": null,\n    "message": "Only note owner can change permissions",\n    "error": [\n        {\n            "code": 404,\n            "messages": [\n                "Only note owner can change permissions",\n                "An error occurred"\n            ]\n        }\n    ]\n}',
              },
            },
          },
        },
      },
      delete: {
        tags: ["NotesSharing"],
        summary: "revoke share access",
        parameters: [
          {
            name: "noteId",
            in: "path",
            schema: {
              type: "string",
            },
            required: true,
          },
          {
            name: "shareId",
            in: "path",
            schema: {
              type: "string",
            },
            required: true,
          },
        ],
        responses: {
          "200": {
            description: "OK",
            headers: {
              "Content-Security-Policy": {
                schema: {
                  type: "string",
                  example:
                    "default-src 'self';base-uri 'self';font-src 'self' https: data:;form-action 'self';frame-ancestors 'self';img-src 'self' data:;object-src 'none';script-src 'self';script-src-attr 'none';style-src 'self' https: 'unsafe-inline';upgrade-insecure-requests",
                },
              },
              "Cross-Origin-Opener-Policy": {
                schema: {
                  type: "string",
                  example: "same-origin",
                },
              },
              "Cross-Origin-Resource-Policy": {
                schema: {
                  type: "string",
                  example: "same-origin",
                },
              },
              "Origin-Agent-Cluster": {
                schema: {
                  type: "string",
                  example: "?1",
                },
              },
              "Referrer-Policy": {
                schema: {
                  type: "string",
                  example: "no-referrer",
                },
              },
              "Strict-Transport-Security": {
                schema: {
                  type: "string",
                  example: "max-age=31536000; includeSubDomains",
                },
              },
              "X-Content-Type-Options": {
                schema: {
                  type: "string",
                  example: "nosniff",
                },
              },
              "X-DNS-Prefetch-Control": {
                schema: {
                  type: "string",
                  example: "off",
                },
              },
              "X-Download-Options": {
                schema: {
                  type: "string",
                  example: "noopen",
                },
              },
              "X-Frame-Options": {
                schema: {
                  type: "string",
                  example: "SAMEORIGIN",
                },
              },
              "X-Permitted-Cross-Domain-Policies": {
                schema: {
                  type: "string",
                  example: "none",
                },
              },
              "X-XSS-Protection": {
                schema: {
                  type: "integer",
                  example: "0",
                },
              },
              "Access-Control-Allow-Origin": {
                schema: {
                  type: "string",
                  example: "*",
                },
              },
              "Access-Control-Allow-Credentials": {
                schema: {
                  type: "boolean",
                  example: "true",
                },
              },
              "Content-Type": {
                schema: {
                  type: "string",
                  example: "application/json; charset=utf-8",
                },
              },
              "Content-Length": {
                schema: {
                  type: "integer",
                  example: "81",
                },
              },
              ETag: {
                schema: {
                  type: "string",
                  example: 'W/"51-YeRp02pXJr6aqY4dPlWZMfGGqVU"',
                },
              },
              Date: {
                schema: {
                  type: "string",
                  example: "Sun, 21 Dec 2025 09:39:30 GMT",
                },
              },
              Connection: {
                schema: {
                  type: "string",
                  example: "keep-alive",
                },
              },
              "Keep-Alive": {
                schema: {
                  type: "string",
                  example: "timeout=5",
                },
              },
            },
            content: {
              "text/plain": {
                schema: {
                  type: "string",
                },
                example: '{\n    "success": true,\n    "data": null,\n    "message": "Access revoked successfully",\n    "error": null\n}',
              },
            },
          },
          "409": {
            description: "Conflict",
            headers: {
              "Content-Security-Policy": {
                schema: {
                  type: "string",
                  example:
                    "default-src 'self';base-uri 'self';font-src 'self' https: data:;form-action 'self';frame-ancestors 'self';img-src 'self' data:;object-src 'none';script-src 'self';script-src-attr 'none';style-src 'self' https: 'unsafe-inline';upgrade-insecure-requests",
                },
              },
              "Cross-Origin-Opener-Policy": {
                schema: {
                  type: "string",
                  example: "same-origin",
                },
              },
              "Cross-Origin-Resource-Policy": {
                schema: {
                  type: "string",
                  example: "same-origin",
                },
              },
              "Origin-Agent-Cluster": {
                schema: {
                  type: "string",
                  example: "?1",
                },
              },
              "Referrer-Policy": {
                schema: {
                  type: "string",
                  example: "no-referrer",
                },
              },
              "Strict-Transport-Security": {
                schema: {
                  type: "string",
                  example: "max-age=31536000; includeSubDomains",
                },
              },
              "X-Content-Type-Options": {
                schema: {
                  type: "string",
                  example: "nosniff",
                },
              },
              "X-DNS-Prefetch-Control": {
                schema: {
                  type: "string",
                  example: "off",
                },
              },
              "X-Download-Options": {
                schema: {
                  type: "string",
                  example: "noopen",
                },
              },
              "X-Frame-Options": {
                schema: {
                  type: "string",
                  example: "SAMEORIGIN",
                },
              },
              "X-Permitted-Cross-Domain-Policies": {
                schema: {
                  type: "string",
                  example: "none",
                },
              },
              "X-XSS-Protection": {
                schema: {
                  type: "integer",
                  example: "0",
                },
              },
              "Access-Control-Allow-Origin": {
                schema: {
                  type: "string",
                  example: "*",
                },
              },
              "Access-Control-Allow-Credentials": {
                schema: {
                  type: "boolean",
                  example: "true",
                },
              },
              "Content-Type": {
                schema: {
                  type: "string",
                  example: "application/json; charset=utf-8",
                },
              },
              "Content-Length": {
                schema: {
                  type: "integer",
                  example: "145",
                },
              },
              ETag: {
                schema: {
                  type: "string",
                  example: 'W/"91-M8WJUotbQPuXdNimq+QchrYO6CM"',
                },
              },
              Date: {
                schema: {
                  type: "string",
                  example: "Sun, 21 Dec 2025 09:58:21 GMT",
                },
              },
              Connection: {
                schema: {
                  type: "string",
                  example: "keep-alive",
                },
              },
              "Keep-Alive": {
                schema: {
                  type: "string",
                  example: "timeout=5",
                },
              },
            },
            content: {
              "text/plain": {
                schema: {
                  type: "string",
                },
                example:
                  '{\n    "success": false,\n    "data": null,\n    "message": "Access already revoked",\n    "error": [\n        {\n            "code": 409,\n            "messages": [\n                "Access already revoked",\n                "An error occurred"\n            ]\n        }\n    ]\n}',
              },
            },
          },
        },
      },
    },
  },
};
