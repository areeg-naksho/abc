import React, {
  createRef,
  forwardRef,
  Fragment,
  useCallback,
  useEffect,
  useImperativeHandle,
  useState,
} from "react";
import AvatarEditor from "react-avatar-editor";
import { useDropzone } from "react-dropzone";

// eslint-disable-next-line react/display-name
const ImageEditor = forwardRef(
  ({ name, width, height, image, showPreview, onChange }, ref) => {
    const [internalImage, setImage] = useState();
    const [result, setResult] = useState();
    const [scale, setScale] = useState(1);
    const safeOnChange = (e) => {
      if (onChange) onChange(e);
    };

    useEffect(() => {
      fetch(image)
        .then((response) => response.blob())
        .then((imageBlob) => setImage(URL.createObjectURL(imageBlob)))
        .catch((err) => console.error(err));
    }, []);

    const onDrop = useCallback((acceptedFiles) => {
      setScale(1);
      setImage(acceptedFiles[0]);
    }, []);
    const { getRootProps, getInputProps, isDragActive } = useDropzone({
      onDrop,
    });
    const editorRef = createRef();
    const preview = (e) => setResult(editorRef.current.canvas.toDataURL());

    useImperativeHandle(ref, () => ({
      getImageDataURL: () => editorRef.current.canvas.toDataURL(),
      getCanvas: () => editorRef.current.canvas,
      getName: () => name,
      clear: () => setImage(undefined),
    }));

    return (
      <div className="image-editor" style={{ width }}>
        <AvatarEditor
          ref={editorRef}
          image={internalImage}
          width={width}
          height={height}
          border={0}
          scale={scale}
          onImageChange={safeOnChange}
          onPositionChange={safeOnChange}
        />
        <div
          {...getRootProps()}
          style={{ border: "1px solid #bedab9", maxWidth: 300, margin: "auto" }}
        >
          <input {...getInputProps()} />
          {isDragActive ? (
            <p>Drop the files here ...</p>
          ) : (
            <p>Drop a file, or click to select</p>
          )}
        </div>
        <div
          className="image-editor-scale"
          style={{ maxWidth: 300, margin: "auto" }}
        >
          <input
            className="image-editor-scale-range"
            type="range"
            value={scale}
            min={1}
            step={0.1}
            max={5}
            onChange={(e) => setScale(e.target.value)}
          />
          <input
            className="image-editor-scale-number"
            type="text"
            value={scale}
            disabled={true}
            size={3}
          />
        </div>
        {showPreview ? (
          <Fragment>
            <button onClick={preview}>Preview</button>
            {result ? (
              <img src={result} width={width} height={height} alt="viewer" />
            ) : null}
          </Fragment>
        ) : null}
        <style jsx="true">
          {`
            .image-editor-scale {
              display: flex;
            }

            .image-editor-scale-range {
              flex-grow: 1;
            }

            .image-editor-scale-number {
              width: 3ch;
              flex-grow: 0;
            }
            .image-editor {
              display: block;
              margin: auto;
              margin-ottom: 20;
              margin-right: 10;
              margin-left: 10;
            }
          `}
        </style>
      </div>
    );
  }
);

export default ImageEditor;
