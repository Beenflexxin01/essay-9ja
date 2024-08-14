import Modal from "react-bootstrap/Modal";
import { useNavigate } from "react-router-dom";
import WritersDeleteBtn from "./DeleteModalBtn/WritersDeleteBtn";
import { useState } from "react";
import DeactivateWriterModalBtn from "./UpdateModalBtn/DeactivateWriterModalBtn";

function WritersModal({ writersId, accountStatus, ...props }) {
  const navigate = useNavigate();

  const [isOpen, setIsOpen] = useState(false);

  const toggleOffMenuBar = () => setIsOpen(!isOpen);
  return (
    <>
      <Modal
        {...props}
        size="1g"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        className="modal-c"
      >
        <Modal.Body>
          <nav className="modal-nav">
            <ul className="modal-ul">
              <li
                className="modal-li"
                onClick={() => navigate(`/writer-details/${writersId}`)}
              >
                <svg
                  width="18"
                  height="12"
                  viewBox="0 0 18 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2.57879 8.15232C2.81683 8.54621 2.69049 9.0585 2.29659 9.29654C1.9027 9.53459 1.39041 9.40825 1.15237 9.01435C0.813951 8.45437 0.584347 7.97181 0.449336 7.66031C0.256012 7.21426 0.284063 6.71207 0.519581 6.2915C0.878967 5.64973 1.78685 4.16611 3.18604 2.83307C4.58202 1.50308 6.54629 0.25 8.9997 0.25C11.4531 0.25 13.4174 1.50308 14.8134 2.83307C16.2125 4.16611 17.1204 5.64973 17.4798 6.2915C17.7153 6.71207 17.7434 7.21426 17.5501 7.6603C17.4151 7.97181 17.1855 8.45437 16.847 9.01435C16.609 9.40825 16.0967 9.53459 15.7028 9.29654C15.3089 9.0585 15.1826 8.54621 15.4206 8.15232C15.6928 7.70192 15.8817 7.31241 15.9962 7.05369C15.6581 6.45778 14.8573 5.17693 13.6637 4.03975C12.4308 2.86513 10.858 1.91667 8.9997 1.91667C7.14141 1.91667 5.56858 2.86513 4.33569 4.03975C3.14208 5.17693 2.34129 6.45778 2.00316 7.05369C2.11772 7.31241 2.3066 7.70192 2.57879 8.15232Z"
                    fill="#505050"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M8.9997 3.16667C6.69851 3.16667 4.83303 5.03215 4.83303 7.33333C4.83303 9.63452 6.69851 11.5 8.9997 11.5C11.3009 11.5 13.1664 9.63452 13.1664 7.33333C13.1664 5.03215 11.3009 3.16667 8.9997 3.16667ZM6.4997 7.33333C6.4997 5.95262 7.61899 4.83333 8.9997 4.83333C10.3804 4.83333 11.4997 5.95262 11.4997 7.33333C11.4997 8.71405 10.3804 9.83333 8.9997 9.83333C7.61899 9.83333 6.4997 8.71405 6.4997 7.33333Z"
                    fill="#505050"
                  />
                </svg>
                View detail
              </li>
              <li className="modal-li" onClick={toggleOffMenuBar}>
                <svg
                  width="16"
                  height="19"
                  viewBox="0 0 16 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3.83333 9.49967C3.83333 9.03944 4.20643 8.66634 4.66667 8.66634H11.3333C11.7936 8.66634 12.1667 9.03944 12.1667 9.49967C12.1667 9.95991 11.7936 10.333 11.3333 10.333H4.66667C4.20643 10.333 3.83333 9.95991 3.83333 9.49967Z"
                    fill="#505050"
                  />
                  <path
                    d="M4.66667 12.833C4.20643 12.833 3.83333 13.2061 3.83333 13.6663C3.83333 14.1266 4.20643 14.4997 4.66667 14.4997H11.3333C11.7936 14.4997 12.1667 14.1266 12.1667 13.6663C12.1667 13.2061 11.7936 12.833 11.3333 12.833H4.66667Z"
                    fill="#505050"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M3.83333 0.333008C1.99238 0.333008 0.5 1.82539 0.5 3.66634V15.333C0.5 17.174 1.99238 18.6663 3.83333 18.6663H12.1667C14.0076 18.6663 15.5 17.174 15.5 15.333V7.07147C15.5 6.29168 15.2266 5.53657 14.7274 4.93752L11.8898 1.53239C11.2565 0.772418 10.3183 0.333008 9.32906 0.333008H3.83333ZM2.16667 3.66634C2.16667 2.74587 2.91286 1.99967 3.83333 1.99967H8.83333V4.49967C8.83333 6.34062 10.3257 7.83301 12.1667 7.83301H13.8333V15.333C13.8333 16.2535 13.0871 16.9997 12.1667 16.9997H3.83333C2.91286 16.9997 2.16667 16.2535 2.16667 15.333V3.66634ZM13.5661 6.16634C13.5299 6.11029 13.4901 6.05623 13.447 6.00449L10.6094 2.59937C10.5747 2.55772 10.5382 2.51801 10.5 2.48029V4.49967C10.5 5.42015 11.2462 6.16634 12.1667 6.16634H13.5661Z"
                    fill="#505050"
                  />
                </svg>
                <DeactivateWriterModalBtn
                  writersId={writersId}
                  accountStatus={accountStatus}
                />
              </li>
              <li className="modal-li" onClick={() => setIsOpen(!isOpen)}>
                <svg
                  width="12"
                  height="19"
                  viewBox="0 0 12 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3.91659 0.958008C3.57021 0.958008 3.25994 1.17228 3.13727 1.49622L2.94594 2.00145C2.53579 1.96047 2.1579 1.91956 1.85199 1.88522C1.62331 1.85954 1.43533 1.83758 1.30475 1.82207L1.15413 1.80399L1.10298 1.79774C0.646233 1.74118 0.229468 2.06552 0.172907 2.52226C0.116346 2.97901 0.440762 3.39513 0.89751 3.45169L0.95317 3.4585L1.10815 3.4771C1.24177 3.49297 1.43333 3.51535 1.66602 3.54147C2.13099 3.59368 2.76207 3.66108 3.42419 3.72151C4.31734 3.80302 5.29636 3.87467 5.99992 3.87467C6.70349 3.87467 7.68251 3.80302 8.57566 3.72151C9.23778 3.66108 9.86886 3.59368 10.3338 3.54147C10.5665 3.51535 10.7581 3.49297 10.8917 3.4771L11.0467 3.4585L11.1022 3.4517C11.559 3.39514 11.8835 2.97901 11.8269 2.52226C11.7704 2.06552 11.3543 1.7411 10.8975 1.79766L10.8457 1.80399L10.6951 1.82207C10.5645 1.83758 10.3765 1.85954 10.1479 1.88522C9.84195 1.91956 9.46406 1.96047 9.05391 2.00145L8.86258 1.49622C8.73991 1.17228 8.42964 0.958008 8.08326 0.958008H3.91659Z"
                    fill="#505050"
                  />
                  <path
                    d="M5.16659 9.29134C5.16659 8.8311 4.79349 8.45801 4.33326 8.45801C3.87302 8.45801 3.49992 8.8311 3.49992 9.29134V13.458C3.49992 13.9182 3.87302 14.2913 4.33326 14.2913C4.79349 14.2913 5.16659 13.9182 5.16659 13.458V9.29134Z"
                    fill="#505050"
                  />
                  <path
                    d="M7.66659 8.45801C8.12683 8.45801 8.49992 8.8311 8.49992 9.29134V13.458C8.49992 13.9182 8.12683 14.2913 7.66659 14.2913C7.20635 14.2913 6.83326 13.9182 6.83326 13.458V9.29134C6.83326 8.8311 7.20635 8.45801 7.66659 8.45801Z"
                    fill="#505050"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M11.758 6.20847C11.8335 5.15117 10.9219 4.30354 9.886 4.42326C8.82598 4.54576 7.19021 4.70801 5.99992 4.70801C4.80964 4.70801 3.17387 4.54576 2.11385 4.42326C1.07791 4.30354 0.166359 5.15117 0.241881 6.20847L0.955826 16.2037C1.00995 16.9614 1.57431 17.602 2.34879 17.7185C3.1793 17.8434 4.70321 18.0428 6.00089 18.0413C7.28262 18.0399 8.81273 17.8412 9.64689 17.7175C10.4227 17.6024 10.9899 16.9613 11.0442 16.2014L11.758 6.20847ZM10.0773 6.0789C10.0802 6.07857 10.0824 6.07877 10.0824 6.07877L10.0846 6.07927C10.0865 6.07991 10.0894 6.08143 10.0923 6.08415C10.0942 6.08595 10.0956 6.08815 10.0956 6.08815L10.0955 6.08973L9.38253 16.0718C8.55696 16.1938 7.14203 16.3734 5.99896 16.3747C4.8435 16.376 3.43732 16.1962 2.61744 16.0735L1.90431 6.08973L1.90425 6.08815C1.90425 6.08815 1.90567 6.08595 1.90757 6.08415C1.91044 6.08143 1.91335 6.07991 1.9152 6.07927L1.9174 6.07877C1.9174 6.07877 1.91962 6.07857 1.92251 6.0789C2.98441 6.20162 4.70446 6.37467 5.99992 6.37467C7.29539 6.37467 9.01544 6.20162 10.0773 6.0789Z"
                    fill="#505050"
                  />
                </svg>
                <WritersDeleteBtn />
              </li>
            </ul>
          </nav>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default WritersModal;
