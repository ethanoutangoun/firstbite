/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import "../../sass/pages/equipmentList.scss";

import { useHistory } from "react-router-dom";
import DjangoImgSrc from "../../assets/images/django-logo-negative.png";

const EquipmentList = () => {
  const history = useHistory();

  const equipmentList = [
    {
      id: 1,
      name: "Equipment 1",
      description: "Description of Equipment 1",
      image:
        "https://cdnimg.webstaurantstore.com/images/products/large/22232/2059147.jpg",
    },
    {
      id: 2,
      name: "Equipment 2",
      description: "Description of Equipment 2",
      image: "https://cooked-ayxh7.ondigitalocean.app/images/chef-avatar.png",
    },
    {
      id: 3,
      name: "Equipment 3",
      description: "Description of Equipment 3",
      image:
        "https://cdnimg.webstaurantstore.com/images/products/large/22232/2059147.jpg",
    },
    {
      id: 4,
      name: "Equipment 4",
      description: "Description of Equipment 4",
      image: "https://cooked-ayxh7.ondigitalocean.app/images/chef-avatar.png",
    },
    {
      id: 5,
      name: "Equipment 5",
      description: "Description of Equipment 5",
      image:
        "https://cdnimg.webstaurantstore.com/images/products/large/22232/2059147.jpg",
    },
    {
      id: 6,
      name: "Equipment 6",
      description: "Description of Equipment 6",
      image: "https://cooked-ayxh7.ondigitalocean.app/images/chef-avatar.png",
    },
  ];

  // Render the list of equipment
  const renderEquipmentList = () => {
    return (
      <div className="grid-container">
        {equipmentList.map((equipment) => (
          <div
            key={equipment.id}
            className="item-container"
            onClick={() => history.push(`/equipment/${equipment.id}`)}
          >
            <div className="image-container">
              <img alt={equipment.name} src={DjangoImgSrc} />
            </div>
            <h3>{equipment.name}</h3>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div>
      <h2>Equipment List</h2>

      {renderEquipmentList()}
    </div>
  );
};

export default EquipmentList;
