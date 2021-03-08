import styled from 'styled-components'

const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
  text-align: center;
  font-family: arial,sans-serif;
`

const Quadrado = styled.div`
  width: 30%;
  height: 30%;
  background-color: ${({ theme }) => theme.colors.secondary};
  padding: 10px;
  margin: auto;
  margin-top: 10px;
  border-radius: 10px;
`

export default function Home() {
  return (
    <Quadrado>
      <Title>Teste</Title>
    </Quadrado>
  ); 
}
