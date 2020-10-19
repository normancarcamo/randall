import styled from 'styled-components';

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  position: fixed;
  background-color: #0000007a;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

type Props = {
  children?: any;
  onClick: any;
};

const Modal = ({ children, onClick }: Props) => <Wrapper onClick={onClick}>{children}</Wrapper>;

Modal.defaultProps = {
  children: null
};

export default Modal;
