angular
  .module("myAppHomeService", [])

  .factory("homeContent", function () {
    return {
      getHeader: function () {
        return "Welcome Human";
      },
      getSubheader: function () {
        return "To Joe's Awesome Website";
      },
      getContent: function () {
        var content = [
          {
            imgUrl:
              "https://3.bp.blogspot.com/-c-OpMD_qF4Y/U_xJfbIqUzI/AAAAAAAAHgA/rfDuMp2IfCQ/s1600/github_icon.png",
            heading: "Some Heading",
            subheading: "Quiet Heading",
            text: "Here is some basic text to fill the space beside the picture",
          },
          {
            imgUrl: "http://aashni.me/images/somacro/border/stackoverflow.png",
            heading: "Some Heading",
            subheading: "Quiet Heading",
            text: "Here is some basic text to fill the space beside the picture",
          },
          {
            imgUrl:
              "https://pbs.twimg.com/profile_images/2149314222/square.png",
            heading: "Some Heading",
            subheading: "Quiet Heading",
            text: "Here is some basic text to fill the space beside the picture",
          },
        ];
        return content;
      },
      getCartoes: ($scope) => {
        var cartoes;

        var req = new XMLHttpRequest();
        req.open("GET", `/assets/file/db_ms-xls.xlsx`, true);
        req.responseType = "arraybuffer";

        req.onload = function (e) {
          var data = new Uint8Array(req.response);
          var workbook = XLSX.read(data, { type: "array" });

          cartoes = XLSX.utils.sheet_to_row_object_array(
            workbook.Sheets["Cartoes"]
          );

          $scope.cartoes = cartoes;
        };

        req.send();
      },
    };
  });
