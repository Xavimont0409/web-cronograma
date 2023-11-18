import { useState } from "react";
import { Modal } from "../../utils/Modal";
import { InputFiel } from "../../utils/InputFiel";
import { InputSelect } from "../../utils/InputSelect";
import { useHookUser } from "../../hooks/Users/useHookUser";

export default function Calendario() {
  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const handleSubmit = (data) => {
    console.log("Student data:", data);
    handleCloseModal();
  };

  const { register, errors, control } = useHookUser();

  return (
    <div>
      {/* Open the modal when clicking a button or link */}
      <button onClick={handleOpenModal}>Add/Update Student</button>

      {/* Modal for adding or updating a student */}
      {openModal && (
        <Modal
          closeModal={handleCloseModal}
          title="Add/Update Student"
          onSubmit={handleSubmit}
          className="grid grid-cols-3 grid-rows-3 gap-4"
        >
          {/* First Row */}
          <InputFiel
            register={register}
            errors={errors}
            labelText="Name"
            name="name"
            placeholder="Enter the name"
            requiredText="This field is required"
          />
          <InputFiel
            register={register}
            errors={errors}
            labelText="Last Name"
            name="lastName"
            placeholder="Enter the last name"
            requiredText="This field is required"
          />
          <InputFiel
            register={register}
            errors={errors}
            labelText="Guardian's Name"
            name="guardianName"
            placeholder="Enter the guardian's name"
            requiredText="This field is required"
          />

          {/* Second Row */}
          <InputFiel
            register={register}
            errors={errors}
            labelText="Phone"
            name="phone"
            placeholder="Enter the phone number"
            requiredText="This field is required"
          />
          <InputFiel
            register={register}
            errors={errors}
            labelText="Email"
            name="email"
            placeholder="Enter the email"
            requiredText="This field is required"
          />
          <InputSelect
            labelText="Class Type"
            name="classType"
            control={control}
            options={[
              { value: "class1", name: "Class 1" },
              { value: "class2", name: "Class 2" },
              // Add more options as needed
            ]}
            requiredText="This field is required"
          />

          {/* Third Row */}
          <InputSelect
            labelText="Payment Type"
            name="paymentType"
            control={control}
            options={[
              { value: "payment1", name: "Payment 1" },
              { value: "payment2", name: "Payment 2" },
              // Add more options as needed
            ]}
            requiredText="This field is required"
          />
          <InputFiel
            register={register}
            errors={errors}
            labelText="Level"
            name="level"
            placeholder="Enter the level"
            requiredText="This field is required"
          />

          {/* Buttons */}
          <div className="col-span-3 flex justify-end items-center mt-4">
            <button
              type="submit"
              className="bg-green-500 text-white px-4 py-2 rounded-md mr-2"
            >
              Update
            </button>
            <button
              type="button"
              onClick={handleCloseModal}
              className="bg-red-500 text-white px-4 py-2 rounded-md"
            >
              Cancel
            </button>
          </div>
        </Modal>
      )}
    </div>
  );
}
