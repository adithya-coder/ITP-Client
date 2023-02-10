import React from "react";
//@ts-ignore
import CKEditor from "@ckeditor/ckeditor5-react";
//@ts-ignore
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

interface Props {
  setText: React.Dispatch<React.SetStateAction<string>>;
  text?: string;
}

const CKTextEditor: React.FC<Props> = ({ setText, text = "" }) => {
  return (
    <>
      <CKEditor
        editor={ClassicEditor}
        data={text}
        config={{
          removePlugins: [
            "MediaEmbed",
            "Image",
            "EasyImage",
            "ImageToolbar",
            "ImageCaption",
            "ImageStyle",
            "ImageUpload",
          ],
        }}
        onInit={(editor: any) => {
          // You can store the "editor" and use when it is needed.
          // console.log("Editor is ready to use!", editor);
        }}
        onChange={(event: any, editor: { getData: () => any }) => {
          const data = editor.getData();
          setText(data);
          // console.log({ event, editor, data });
        }}
        onBlur={(event: any, editor: any) => {
          // console.log("Blur.", editor);
        }}
        onFocus={(event: any, editor: any) => {
          // console.log("Focus.", editor);
        }}
      />
    </>
  );
};

export default CKTextEditor;
