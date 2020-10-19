import styled, { keyframes } from 'styled-components';
import { /* useReducer, */ useState } from 'react';
import { Container, Row, Col } from 'styled-bootstrap-grid';
import ReactPaginate from 'react-paginate';
import Modal from '~src/app/modal';

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const Form = styled.form`
  padding: 1rem;
  /* height: 100vh; */
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  max-width: 22rem;
  margin: 0 auto;
  animation: 1s ${fadeIn} ease-out;
`;

const Input = styled.input`
  display: block;
  height: 2rem;
  width: 100%;
  padding: 0 0.5rem;
`;

const ModalContent = styled.div`
  height: 500px;
  width: 500px;
  display: flex;
  align-items: center;
  justify-content: center;

  & > img {
    display: block;
    margin: auto;
  }
`;

const Paginator = styled(ReactPaginate)`
  background-color: blue;
  & > li {
    display: inline;
  }
`;

// type State = {
//   isLoading: boolean;
// };

// enum Action {
//   SEARCH_GIF
// }

// const initialState: State = {
//   isLoading: false
// };

// Pending to use it instead of useState...
// const reducer = (state: State, action: { type: Action; payload?: any }) => {
//   switch (action.type) {
//     default:
//       return state;
//   }
// };

let interval = null;

function throttle(time, callback) {
  // Clean prior timer:
  clearInterval(interval);

  // Start new timer:
  interval = setInterval(() => {
    // Clean current timer:
    clearInterval(interval);

    // Run the callback:
    if (callback) {
      callback();
    }
  }, time);
}

const BASE_URL = 'https://api.giphy.com/v1/gifs/search?api_key=OMTZr6f9VU3h84DD99m6JpzMBrJyQJHI&limit=25&q=';

// Pending to use this...
// const params = new URLSearchParams('q=search+string&version=1&person=Eric');
// params.set('api_key', 'OMTZr6f9VU3h84DD99m6JpzMBrJyQJHI');
// params.set('limit', 25);

type Response = {
  data: any;
  pagination: any;
};

const App = () => {
  // TODO: use useReducer...
  // const [state, dispatch] = useReducer(reducer, initialState);
  const [images, setImages] = useState<Response>();
  const [isModalVisible, setModalVisible] = useState(false);
  const [selectedImage, selectImage] = useState();

  const onInput = async ({ target: { value } }: any) => {
    throttle(600, async () => {
      const response = await fetch(BASE_URL + value, {
        method: 'GET',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json'
        }
      });

      const data = await response.json();

      // Refactor...
      setImages(data);
    });
  };

  const onImage = (image) => () => {
    setModalVisible(true);
    selectImage(image);
  };

  const onModal = () => setModalVisible(false);

  return (
    <>
      <Form>
        <Input type="text" placeholder="Search Gif!" onInput={onInput} />
      </Form>
      <Container>
        <Row>
          {images?.data?.map((image) => (
            <Col
              col
              key={image.id}
              onClick={onImage(image.images.original.url)}
            >
              <img
                src={image.images.preview_gif.url}
                alt={image.slug}
                height="100"
                key={image.id}
              />
            </Col>
          ))}
        </Row>
      </Container>
      {images?.data?.length && (
        <Paginator
          pageCount={images.pagination.total_count}
          pageRangeDisplayed={images.pagination.count}
          marginPagesDisplayed={images.pagination.offset}
        />
      )}
      {isModalVisible && (
        <Modal onClick={onModal}>
          <ModalContent>
            <img src={selectedImage} alt="original" />
          </ModalContent>
        </Modal>
      )}
    </>
  );
};

export default App;
