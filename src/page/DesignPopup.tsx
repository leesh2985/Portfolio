import styled from 'styled-components';

interface DesignPostData {
  imgDatas: string[];
}

interface DesignPopupProps {
  data: DesignPostData | null;
  onClose: () => void;
  selectedIndex: number;
}

export default function DesignPopup({ data, onClose, selectedIndex }: DesignPopupProps) {
  if (!data) {
    return null;
  }

  return (
    <Popup onClick={onClose}>
      <PopupContent>
        <PopupImg src={data.imgDatas[selectedIndex]} alt={`이미지`} />
      </PopupContent>
    </Popup>
  );
}

const Popup = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.8);
  z-index: 9999;
`;

const PopupContent = styled.div`
  background: #e5e5e5;

  max-width: 500px;
  max-height: 900px;
  overflow-y: auto;

  box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
`;

const PopupImg = styled.img`
  width: 100%;
  height: 100%;
  padding: 20px;
`;
