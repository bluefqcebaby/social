import styled from "styled-components";


const Wrapper = styled.div`
  padding: 4rem;
  background: white;
`

export default function ContentBlock({children}) {
  return (
    <Wrapper>
      {children}
    </Wrapper>
  )
}
