import React from "react";
import { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const SearchBar = ({ suggestions, queryHandler }) => {
  const [inputText, setInputText] = useState("");
  const [active, setActive] = useState(0);
  const navigate = useNavigate();

  const scrollRef = useRef();

  const handleInputTextChanch = (e) => {
    setInputText(e.target.value);
  };

  const handleActiveSuggestions = (e) => {
    switch (e.keyCode) {
      case 38:
        setActive((prev) => prev - 1);
        break;

      case 40:
        if (active === suggestions.length) {
          scrollRef.current.scrollTop = 0;
          setActive(0)
        }
        else if (active >= 4) {
          scrollRef.current.scrollTop = 38.667;
        }
        if (active < suggestions.length && active !== suggestions.length) {
          setActive((prev) => prev + 1);
        }


        break;

      default:
        return;
    }
  };
  // const thottledText = useT
  //   useEffect(() => {
  //     queryHandler(inputText);
  //   }, [inputText, queryHandler]);
  useEffect(() => {
    queryHandler(inputText);
  }, [inputText, queryHandler]);
  return (

    <Wrapper onKeyUp={handleActiveSuggestions}>
      <SearchBarWrapper>
        <input value={inputText} onChange={handleInputTextChanch} />
      </SearchBarWrapper>

      <div


      >
        <SuggestionBox len={5} active={active} ref={scrollRef}>
          {suggestions.map((item, index) => {
            return (
              <div key={index}
                onMouseOver={() => setActive(index + 1)}
              >{item}</div>
            )
          })}
        </SuggestionBox>
      </div>
      <button
        onClick={() => {
          localStorage.setItem("searchItems", JSON.stringify(suggestions));
          navigate("/search");
        }}>search</button>
    </Wrapper>
  );
};

const SuggestionBox = styled.div`
border: 1px solid black;
display: flex;
flex-direction: column;
max-height:200px;
max-height: ${({ len }) => `${len * 38.667}px`};
border-top-color:${({ len }) => `${len * 38.667}px`}
margin:auto;
overflow: auto;

 `;

const img = styled.img`
 max-width: 100px;
 `

const SearchBarWrapper = styled.div`
  border: 1px solid red;
  display: flex;
  padding: 5px 10px;
  align-items: center;
`;

const input = styled.input`
  boder: none;
  outline: none;
  font-size: 20px;
  flex: 1;
`;

const Wrapper = styled.div`
  max-width: 80%;
  height:400px;
  margin: auto;
`;
export default SearchBar;