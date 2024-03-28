/* eslint-disable jsx-a11y/heading-has-content */
/* eslint-disable react/self-closing-comp */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable no-restricted-globals */
import "../../sass/pages/equipmentList.scss";

const EquipmentListSkeleton = () => {
  return (
    <div className="grid-container">
      <div className="item-container">
        <div className="image-container-skeleton"></div>
        <h3></h3>
      </div>
      <div className="item-container">
        <div className="image-container-skeleton"></div>
        <h3></h3>
      </div>
      <div className="item-container">
        <div className="image-container-skeleton"></div>
        <h3></h3>
      </div>
      <div className="item-container">
        <div className="image-container-skeleton"></div>
        <h3></h3>
      </div>
    </div>
  );
};

export default EquipmentListSkeleton;
