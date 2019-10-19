define({ "api": [
  {
    "type": "post",
    "url": "/find/",
    "title": "Find a checkout",
    "description": "<p>Start Crawler,</p>",
    "name": "Find",
    "group": "Find",
    "parameter": {
      "fields": {
        "checkin": [
          {
            "group": "checkin",
            "type": "Date",
            "optional": false,
            "field": "checkin",
            "description": "<p>date of the checkin.</p>"
          }
        ],
        "checlout": [
          {
            "group": "checlout",
            "type": "Date",
            "optional": false,
            "field": "checlout",
            "description": "<p>date of the checlout.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n     \"checkin\": \"25/12/2019\",\n     \"checkout\": \"01/01/2020\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>Success .</p>"
          },
          {
            "group": "Success 200",
            "type": "Crawler",
            "optional": false,
            "field": "data",
            "description": "<p>Array of ObjectCrawler</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"success\": \"true\",\n  \"data\": {Array}\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Failed",
            "description": "<p>to find crawler.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Failed\n{\n  \"success\": \"false\",\n  \"message\": \"Failed to find crawler\",\n  \"errors\": Error\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/api/controllers/find.controller.js",
    "groupTitle": "Find"
  }
] });
