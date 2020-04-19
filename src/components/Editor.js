import React /*, { useState }*/ from "react";
import { SEditor } from "./StyledEditor";
import ContentEditable from "react-contenteditable";
import { EditorConfig } from "./EditorConfigs";
import useFullScreen from "../hooks/useFullScreen";
import J_ from "../utils";

const ToolbarIcon = ({name,toolTips,...restProps}) => {
  
  return (
    <SEditor.Icon    {...restProps}>
      <i
        className="material-icons"
        onClick={(e) => e.preventDefault()}
      >
        {name}
      </i>
      
        <SEditor.IconTooltips >
          {toolTips}
        </SEditor.IconTooltips>
      
    </SEditor.Icon>
  );
};

const EditorToolbar = ({
  onClick,
  configs: { formatTools, toolBarLeft },
  ...restProps
}) => {
  return (
    <SEditor.Toolbar {...restProps}>
      <SEditor.IconContainer>
        {formatTools.map(({ id, name, icon }) => (
          <ToolbarIcon key={id} onClick={onClick} data-value={name} name={icon} toolTips={name}/>
        ))}
      </SEditor.IconContainer>
      <SEditor.IconContainer>
        {toolBarLeft.map(({ id, name, icon }) => (
          <ToolbarIcon key={id} onClick={onClick} data-value={name} name={icon} toolTips={name}/>
        ))}
      </SEditor.IconContainer>
    </SEditor.Toolbar>
  );
};
const EditorFooter = ({ content }) => {
  const contentLength = J_.stripHtml(content).length;
  return <SEditor.Footer>{"caracters : " + contentLength}</SEditor.Footer>;
};
const Editor = (props) => {
  const editor = React.useRef();

  return (
    <SEditor.Body>
      <ContentEditable
        innerRef={editor}
        html={props.content} // innerHTML of the editable div
        disabled={false} // use true to disable editing
        onChange={props.handleChange} // handle innerHTML change
        tagName="div" // Use a custom HTML tag (uses a div by default)
      />
    </SEditor.Body>
  );
};

const SLEditor = (props) => {
  // REF
  const editor = React.useRef(null);

  // initial content wrapped in p tag
  const initialState = "<p>" + props.content + "</p>";
  // content of the editor
  const [content, setContent] = React.useState(initialState);
  // fullscreen state
  const [isFullscreen, setIsFullscreen] = useFullScreen(editor);
  // handle change on Edit
  const handleChange = (event) => setContent(event.target.value);
  // toolbar action
  const handleAction = (e) => {
    console.log('clicked')
    let action = e.currentTarget.dataset.value;
    if (action === "fullscreen") {
      onToggleFullScreen();
    } else {
      document.execCommand(action);
    }
  };
  // fullscreen toggle function
  const onToggleFullScreen = () =>
    isFullscreen ? document.exitFullscreen() : setIsFullscreen();

  return (
    <SEditor.Container ref={editor}>
      <EditorToolbar onClick={handleAction} configs={EditorConfig} />
      <Editor content={content} handleChange={handleChange} />
      <EditorFooter content={content} />
    </SEditor.Container>
  );
};

export default SLEditor;
