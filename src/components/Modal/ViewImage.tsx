import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  ModalBody,
  Image,
  Link,
} from '@chakra-ui/react';

interface ModalViewImageProps {
  isOpen: boolean;
  onClose: () => void;
  imgUrl: string;
}

export function ModalViewImage({
  isOpen,
  onClose,
  imgUrl,
}: ModalViewImageProps): JSX.Element {
  // TODO MODAL WITH IMAGE AND EXTERNAL LINK
  return(
    <Modal isOpen={isOpen} onClose={() => onClose()} isCentered={true} >
      <ModalOverlay >
        <ModalContent backgroundColor={"transparent"} display={"flex"} maxW={"900px"} maxH={"600px"}>
          <ModalBody>
            <Image src={imgUrl} maxW={"900px"} maxH={"600px"} align={"center"}/>

            <ModalFooter backgroundColor={"gray.800"} justifyContent={"left"}>
              <Link href={imgUrl}>Abrir original</Link>
            </ModalFooter>
          </ModalBody>
        </ModalContent>
      </ModalOverlay>
    </Modal>
  )
}
