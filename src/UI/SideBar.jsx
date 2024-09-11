import { Link, NavLink } from "react-router-dom";
import logo from "/images/logo.png";
import AddBtn from "./AddBtn";
import LogOut from "../Components/Auth/LogOut";

function SideBar() {
  return (
    <>
      <div className="side-bar">
        <div className="log-img">
          <Link to="/home">
            <img src={logo} alt="Logo" className="logo-img" />
          </Link>
        </div>
        <nav className="side-bar-nav">
          <ul className="side-bar-ul">
            <li className="side-bar-li">
              <NavLink to="/home" className="side-bar-link">
                <svg
                  width="19"
                  height="18"
                  viewBox="0 0 19 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M3.33333 8.58333C2.18274 8.58333 1.25 7.65059 1.25 6.5L1.25 2.33333C1.25 1.18274 2.18274 0.25 3.33333 0.25H7.5C8.65059 0.25 9.58333 1.18274 9.58333 2.33333V6.5C9.58333 7.65059 8.65059 8.58333 7.5 8.58333H3.33333ZM2.91667 6.5C2.91667 6.73012 3.10322 6.91667 3.33333 6.91667L7.5 6.91667C7.73012 6.91667 7.91667 6.73012 7.91667 6.5V2.33333C7.91667 2.10322 7.73012 1.91667 7.5 1.91667L3.33333 1.91667C3.10321 1.91667 2.91667 2.10322 2.91667 2.33333L2.91667 6.5Z"
                    fill="#767B91"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M6.3967 9.9952C5.62532 9.22382 4.37468 9.22382 3.6033 9.9952L1.41186 12.1866C0.64049 12.958 0.640491 14.2087 1.41186 14.98L3.6033 17.1715C4.37468 17.9428 5.62532 17.9428 6.3967 17.1715L8.58814 14.98C9.35951 14.2087 9.35951 12.958 8.58814 12.1866L6.3967 9.9952ZM4.78181 11.1737C4.90232 11.0532 5.09769 11.0532 5.21819 11.1737L7.40962 13.3651C7.53013 13.4856 7.53013 13.681 7.40962 13.8015L5.21819 15.993C5.09769 16.1135 4.90231 16.1135 4.78182 15.993L2.59038 13.8015C2.46988 13.681 2.46988 13.4856 2.59038 13.3651L4.78181 11.1737Z"
                    fill="#767B91"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M10.4167 15.6667C10.4167 16.8173 11.3494 17.75 12.5 17.75H16.6667C17.8173 17.75 18.75 16.8173 18.75 15.6667V11.5C18.75 10.3494 17.8173 9.41667 16.6667 9.41667H12.5C11.3494 9.41667 10.4167 10.3494 10.4167 11.5V15.6667ZM12.5 16.0833C12.2699 16.0833 12.0833 15.8968 12.0833 15.6667V11.5C12.0833 11.2699 12.2699 11.0833 12.5 11.0833H16.6667C16.8968 11.0833 17.0833 11.2699 17.0833 11.5V15.6667C17.0833 15.8968 16.8968 16.0833 16.6667 16.0833H12.5Z"
                    fill="#767B91"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M10.4167 4.41667C10.4167 6.71785 12.2821 8.58333 14.5833 8.58333C16.8845 8.58333 18.75 6.71785 18.75 4.41667C18.75 2.11548 16.8845 0.25 14.5833 0.25C12.2821 0.25 10.4167 2.11548 10.4167 4.41667ZM14.5833 1.91667C15.964 1.91667 17.0833 3.03595 17.0833 4.41667C17.0833 5.79738 15.964 6.91667 14.5833 6.91667C13.2026 6.91667 12.0833 5.79738 12.0833 4.41667C12.0833 3.03596 13.2026 1.91667 14.5833 1.91667Z"
                    fill="#767B91"
                  />
                </svg>
                Dashboard
              </NavLink>
            </li>
            <li className="side-bar-li">
              <NavLink to="/users" className="side-bar-link">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M10 4.16675C8.15905 4.16675 6.66667 5.65913 6.66667 7.50008C6.66667 9.34103 8.15905 10.8334 10 10.8334C11.8409 10.8334 13.3333 9.34103 13.3333 7.50008C13.3333 5.65913 11.8409 4.16675 10 4.16675ZM8.33333 7.50008C8.33333 6.57961 9.07952 5.83341 10 5.83341C10.9205 5.83341 11.6667 6.57961 11.6667 7.50008C11.6667 8.42056 10.9205 9.16675 10 9.16675C9.07952 9.16675 8.33333 8.42056 8.33333 7.50008Z"
                    fill="#767B91"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M10 18.3334C9.0526 18.3334 7.68656 18.1095 6.64987 17.6331C6.14133 17.3994 5.59568 17.0528 5.27383 16.5342C5.10392 16.2604 4.99657 15.9377 5.00008 15.5785C5.00356 15.2227 5.11513 14.8853 5.29782 14.5762C6.13322 13.1624 7.86629 11.6667 10 11.6667C12.1337 11.6667 13.8668 13.1624 14.7022 14.5762C14.8849 14.8853 14.9964 15.2227 14.9999 15.5785C15.0034 15.9377 14.8961 16.2604 14.7262 16.5342C14.4043 17.0528 13.8587 17.3994 13.3501 17.6331C12.3134 18.1095 10.9474 18.3334 10 18.3334ZM6.73271 15.424C6.66889 15.532 6.66676 15.5857 6.66667 15.5948C6.6666 15.6008 6.66639 15.6174 6.68993 15.6553C6.75609 15.7619 6.94825 15.936 7.34582 16.1187C8.12133 16.4751 9.24069 16.6667 10 16.6667C10.7593 16.6667 11.8787 16.4751 12.6542 16.1187C13.0517 15.936 13.2439 15.7619 13.3101 15.6553C13.3336 15.6174 13.3334 15.6012 13.3333 15.5952C13.3332 15.5861 13.3311 15.532 13.2673 15.424C12.6196 14.3279 11.3529 13.3334 10 13.3334C8.64707 13.3334 7.38039 14.3279 6.73271 15.424Z"
                    fill="#767B91"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M2.08333 10.0001C2.08333 8.61937 3.20262 7.50008 4.58333 7.50008C5.96405 7.50008 7.08333 8.61937 7.08333 10.0001C7.08333 11.3808 5.96405 12.5001 4.58333 12.5001C3.20262 12.5001 2.08333 11.3808 2.08333 10.0001ZM4.58333 9.16675C4.1231 9.16675 3.75 9.53984 3.75 10.0001C3.75 10.4603 4.1231 10.8334 4.58333 10.8334C5.04357 10.8334 5.41667 10.4603 5.41667 10.0001C5.41667 9.53984 5.04357 9.16675 4.58333 9.16675Z"
                    fill="#767B91"
                  />
                  <path
                    d="M2.41311 16.2039C2.20849 16.6162 1.70842 16.7845 1.29617 16.5799C0.883923 16.3752 0.715605 15.8752 0.920223 15.4629C1.22638 14.8461 1.68977 14.2268 2.27271 13.7529C2.85587 13.2789 3.60314 12.9167 4.45598 12.9167C4.91621 12.9167 5.28931 13.2898 5.28931 13.7501C5.28931 14.2103 4.91621 14.5834 4.45598 14.5834C4.08849 14.5834 3.70065 14.74 3.324 15.0462C2.94713 15.3526 2.62603 15.7749 2.41311 16.2039Z"
                    fill="#767B91"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M13.175 10.0001C13.175 8.61937 14.2943 7.50008 15.675 7.50008C17.0558 7.50008 18.175 8.61937 18.175 10.0001C18.175 11.3808 17.0558 12.5001 15.675 12.5001C14.2943 12.5001 13.175 11.3808 13.175 10.0001ZM15.675 9.16675C15.2148 9.16675 14.8417 9.53984 14.8417 10.0001C14.8417 10.4603 15.2148 10.8334 15.675 10.8334C16.1353 10.8334 16.5084 10.4603 16.5084 10.0001C16.5084 9.53984 16.1353 9.16675 15.675 9.16675Z"
                    fill="#767B91"
                  />
                  <path
                    d="M19.0834 15.4629C19.2881 15.8752 19.1197 16.3752 18.7075 16.5799C18.2952 16.7845 17.7952 16.6162 17.5906 16.2039C17.3776 15.7749 17.0565 15.3526 16.6797 15.0462C16.303 14.74 15.9152 14.5834 15.5477 14.5834C15.0875 14.5834 14.7144 14.2103 14.7144 13.7501C14.7144 13.2898 15.0875 12.9167 15.5477 12.9167C16.4005 12.9167 17.1478 13.2789 17.731 13.7529C18.3139 14.2268 18.7773 14.8461 19.0834 15.4629Z"
                    fill="#767B91"
                  />
                </svg>
                Clients
              </NavLink>
            </li>
            <li className="side-bar-li">
              <NavLink to="/writers" className="side-bar-link">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4.62732 9.07873C4.21567 8.8729 4.04882 8.37234 4.25464 7.96069C4.46047 7.54904 4.96103 7.38219 5.37268 7.58802L7.87268 8.83802C8.28433 9.04384 8.45118 9.5444 8.24536 9.95605C8.03953 10.3677 7.53897 10.5346 7.12732 10.3287L4.62732 9.07873Z"
                    fill="#767B91"
                  />
                  <path
                    d="M4.62732 11.5787C4.21567 11.3729 4.04882 10.8723 4.25464 10.4607C4.46047 10.049 4.96103 9.88219 5.37268 10.088L7.87268 11.338C8.28433 11.5438 8.45118 12.0444 8.24536 12.456C8.03953 12.8677 7.53897 13.0346 7.12732 12.8287L4.62732 11.5787Z"
                    fill="#767B91"
                  />
                  <path
                    d="M15.7454 7.96069C15.9512 8.37234 15.7843 8.8729 15.3727 9.07873L12.8727 10.3287C12.461 10.5346 11.9605 10.3677 11.7546 9.95605C11.5488 9.5444 11.7157 9.04384 12.1273 8.83802L14.6273 7.58802C15.039 7.38219 15.5395 7.54904 15.7454 7.96069Z"
                    fill="#767B91"
                  />
                  <path
                    d="M15.7454 10.4607C15.9512 10.8723 15.7843 11.3729 15.3727 11.5787L12.8727 12.8287C12.461 13.0346 11.9605 12.8677 11.7546 12.456C11.5488 12.0444 11.7157 11.5438 12.1273 11.338L14.6273 10.088C15.039 9.88219 15.5395 10.049 15.7454 10.4607Z"
                    fill="#767B91"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M10 16.6667C10.2918 17.4473 10.2919 17.4473 10.2919 17.4472L10.2995 17.4444L10.3196 17.4368L10.3951 17.4081C10.4604 17.3832 10.5548 17.3468 10.6726 17.3007C10.9081 17.2084 11.2379 17.0767 11.6171 16.9181C12.37 16.6032 13.3385 16.1735 14.1489 15.7317C15.0489 15.241 16.3788 14.6806 17.1746 14.3588C17.8678 14.0784 18.3333 13.4054 18.3333 12.6461V4.64104C18.3333 3.44002 17.1836 2.5395 16.0005 2.9031C15.2203 3.14289 14.1985 3.47921 13.4173 3.81931C12.6013 4.17462 11.6282 4.71667 10.8774 5.157C10.5332 5.35888 10.2294 5.54314 10 5.68431C9.77062 5.54314 9.46681 5.35888 9.1226 5.157C8.37185 4.71667 7.39875 4.17462 6.58265 3.81931C5.80148 3.47921 4.77973 3.14289 3.99949 2.9031C2.81637 2.5395 1.66667 3.44002 1.66667 4.64104V12.6461C1.66667 13.4054 2.13217 14.0784 2.82542 14.3588C3.62115 14.6806 4.95106 15.241 5.85112 15.7317C6.66152 16.1735 7.63004 16.6032 8.38292 16.9181C8.76207 17.0767 9.09195 17.2084 9.3274 17.3007C9.4452 17.3468 9.53957 17.3832 9.60487 17.4081L9.68038 17.4368L9.70051 17.4444L9.70747 17.447C9.70752 17.447 9.70819 17.4473 10 16.6667ZM3.50988 4.49623C3.43337 4.47272 3.33333 4.52428 3.33333 4.64104V12.6461C3.33333 12.7148 3.3761 12.7837 3.4504 12.8137C4.2455 13.1353 5.65579 13.727 6.64888 14.2684C7.38382 14.669 8.2903 15.0727 9.02609 15.3805C9.07379 15.4005 9.12068 15.42 9.16667 15.439V7.12849C8.94114 6.98936 8.63204 6.80145 8.27942 6.59464C7.53918 6.16048 6.63728 5.66087 5.91735 5.34743C5.22708 5.04691 4.28059 4.73309 3.50988 4.49623ZM10.8333 7.12849V15.439C10.8793 15.42 10.9262 15.4005 10.9739 15.3805C11.7097 15.0727 12.6162 14.669 13.3511 14.2684C14.3442 13.727 15.7545 13.1353 16.5496 12.8137C16.6239 12.7837 16.6667 12.7148 16.6667 12.6461V4.64104C16.6667 4.52428 16.5666 4.47272 16.4901 4.49623C15.7194 4.73309 14.7729 5.04691 14.0827 5.34743C13.3627 5.66087 12.4608 6.16048 11.7206 6.59464C11.368 6.80145 11.0589 6.98936 10.8333 7.12849Z"
                    fill="#767B91"
                  />
                  <path
                    d="M10 16.6667L10.2919 17.4472C10.1037 17.5176 9.89565 17.5174 9.70747 17.447L10 16.6667Z"
                    fill="#767B91"
                  />
                </svg>
                Writers
              </NavLink>
            </li>
            <li className="side-bar-li">
              <NavLink to="/writer-approvals" className="side-bar-link">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M17.3533 6.14302C17.7548 5.7638 17.7729 5.13089 17.3937 4.72938C17.0144 4.32787 16.3815 4.3098 15.98 4.68902L6.96116 13.2072L4.01997 10.4293C3.61846 10.05 2.98556 10.0681 2.60634 10.4696C2.22712 10.8711 2.24519 11.504 2.6467 11.8833L6.27452 15.3097C6.65992 15.6737 7.2624 15.6737 7.64779 15.3097L17.3533 6.14302Z"
                    fill="#023474"
                  />
                </svg>
                Writers Approval
              </NavLink>
            </li>
            <li className="side-bar-li">
              <NavLink
                to="/wallets/withdrawal/requests"
                className="side-bar-link"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M19.1667 2.85782C19.1667 1.70041 18.0159 0.895378 16.9287 1.29214L10.847 3.51139L4.74014 3.98893C3.00527 4.12458 1.66667 5.57195 1.66667 7.31212V8.52116C1.66667 10.2613 3.00527 11.7087 4.74014 11.8444L5.08397 11.8712L5.6704 16.9657C5.81478 18.22 6.87668 19.1666 8.13923 19.1666C9.62854 19.1666 10.7834 17.8657 10.6068 16.3869L10.1146 12.2646L10.847 12.3219L16.9287 14.5411C18.0159 14.9379 19.1667 14.1329 19.1667 12.9755V2.85782ZM4.87007 5.65052L10.1923 5.23435V10.5989L4.87007 10.1828C4.00264 10.1149 3.33333 9.39124 3.33333 8.52116V7.31212C3.33333 6.44203 4.00263 5.71835 4.87007 5.65052ZM17.5 12.9755L11.859 10.917V4.9163L17.5 2.85782L17.5 12.9755ZM7.32614 16.7751L6.77688 12.0036L8.42026 12.1321L8.95192 16.5845C9.01007 17.0715 8.62972 17.5 8.13923 17.5C7.72341 17.5 7.37369 17.1882 7.32614 16.7751Z"
                    fill="#767B91"
                  />
                </svg>
                Witdrawal Requests
              </NavLink>
            </li>
            <li className="side-bar-li">
              <NavLink to="/wallets/transactions/all" className="side-bar-link">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M10.39 5.09171C11.6168 5.09171 12.6114 6.08626 12.6114 7.3131C12.6114 8.53993 11.6168 9.53448 10.39 9.53448C9.16313 9.53448 8.16858 8.53993 8.16858 7.3131C8.16858 6.08626 9.16313 5.09171 10.39 5.09171ZM10.9447 7.3131C10.9447 7.00673 10.6963 6.75838 10.39 6.75838C10.0836 6.75838 9.83525 7.00673 9.83525 7.3131C9.83525 7.61946 10.0836 7.86782 10.39 7.86782C10.6963 7.86782 10.9447 7.61946 10.9447 7.3131Z"
                    fill="#767B91"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M2.61637 4.95492C2.61637 3.11397 4.10876 1.62158 5.94971 1.62158H14.8302C16.6712 1.62158 18.1636 3.11397 18.1636 4.95492V9.67128C18.1636 10.1254 18.0727 10.5584 17.9083 10.9529L17.6748 12.6695C17.5824 13.3488 17.294 13.9469 16.8775 14.4199C16.8665 14.4544 16.8531 14.4885 16.8372 14.5221L16.0475 16.1959C15.1591 18.0791 12.7807 18.6958 11.0891 17.4816L3.93097 12.3436C3.87067 12.3003 3.81788 12.2504 3.77286 12.1957C3.06463 11.5845 2.61637 10.6802 2.61637 9.67128V4.95492ZM14.8302 13.0046C15.2147 13.0046 15.5839 12.9395 15.9276 12.8198C15.625 13.6085 14.7548 14.0687 13.9039 13.8198L11.1175 13.0046H14.8302ZM4.86619 3.68847C4.50924 3.99415 4.28304 4.44812 4.28304 4.95492V9.67128C4.28304 10.1781 4.50924 10.632 4.86619 10.9377C4.76089 10.7982 4.69845 10.6245 4.69845 10.4362C4.69845 9.97598 5.07155 9.60288 5.53178 9.60288H6.91984C7.38007 9.60288 7.75317 9.97598 7.75317 10.4362C7.75317 10.8965 7.38007 11.2695 6.91984 11.2695H5.53178C5.51012 11.2695 5.48866 11.2687 5.46741 11.2671C5.62009 11.3132 5.78201 11.3379 5.94971 11.3379H14.8302C14.9979 11.3379 15.1598 11.3132 15.3125 11.2671C15.2913 11.2687 15.2698 11.2695 15.2481 11.2695H13.8601C13.3999 11.2695 13.0268 10.8965 13.0268 10.4362C13.0268 9.97598 13.3999 9.60288 13.8601 9.60288H15.2481C15.7084 9.60288 16.0815 9.97598 16.0815 10.4362C16.0815 10.6245 16.019 10.7982 15.9137 10.9377C16.2707 10.632 16.4969 10.1781 16.4969 9.67128V4.95492C16.4969 4.44812 16.2707 3.99415 15.9137 3.68847C16.019 3.82801 16.0815 4.0017 16.0815 4.18998C16.0815 4.65022 15.7084 5.02331 15.2481 5.02331H13.8601C13.3999 5.02331 13.0268 4.65022 13.0268 4.18998C13.0268 3.72974 13.3999 3.35665 13.8601 3.35665H15.2481C15.2698 3.35665 15.2913 3.35747 15.3125 3.3591C15.1598 3.31302 14.9979 3.28825 14.8302 3.28825H5.94971C5.782 3.28825 5.62009 3.31302 5.46741 3.3591C5.48866 3.35747 5.51012 3.35665 5.53178 3.35665H6.91984C7.38007 3.35665 7.75317 3.72974 7.75317 4.18998C7.75317 4.65022 7.38007 5.02331 6.91984 5.02331H5.53178C5.07155 5.02331 4.69845 4.65022 4.69845 4.18998C4.69845 4.0017 4.76089 3.82801 4.86619 3.68847ZM14.5065 15.5523C14.1552 15.5663 13.7947 15.5244 13.4359 15.4194L9.44962 14.2532L12.061 16.1276C12.8862 16.7199 14.0383 16.4408 14.5065 15.5523Z"
                    fill="#767B91"
                  />
                </svg>
                Transactional History
              </NavLink>
            </li>
            <li className="side-bar-li">
              <NavLink to="/tasks" className="side-bar-link">
                <svg
                  width="16"
                  height="20"
                  viewBox="0 0 16 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3.83333 9.99992C3.83333 9.53968 4.20643 9.16658 4.66667 9.16658H11.3333C11.7936 9.16658 12.1667 9.53968 12.1667 9.99992C12.1667 10.4602 11.7936 10.8333 11.3333 10.8333H4.66667C4.20643 10.8333 3.83333 10.4602 3.83333 9.99992Z"
                    fill="#767B91"
                  />
                  <path
                    d="M4.66667 13.3333C4.20643 13.3333 3.83333 13.7063 3.83333 14.1666C3.83333 14.6268 4.20643 14.9999 4.66667 14.9999H11.3333C11.7936 14.9999 12.1667 14.6268 12.1667 14.1666C12.1667 13.7063 11.7936 13.3333 11.3333 13.3333H4.66667Z"
                    fill="#767B91"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M3.83333 0.833252C1.99238 0.833252 0.5 2.32564 0.5 4.16658V15.8333C0.5 17.6742 1.99238 19.1666 3.83333 19.1666H12.1667C14.0076 19.1666 15.5 17.6742 15.5 15.8333V7.57171C15.5 6.79192 15.2266 6.03681 14.7274 5.43776L11.8898 2.03264C11.2565 1.27266 10.3183 0.833252 9.32906 0.833252H3.83333ZM2.16667 4.16658C2.16667 3.24611 2.91286 2.49992 3.83333 2.49992H8.83333V4.99992C8.83333 6.84087 10.3257 8.33325 12.1667 8.33325H13.8333V15.8333C13.8333 16.7537 13.0871 17.4999 12.1667 17.4999H3.83333C2.91286 17.4999 2.16667 16.7537 2.16667 15.8333V4.16658ZM13.5661 6.66658C13.5299 6.61053 13.4901 6.55647 13.447 6.50474L10.6094 3.09961C10.5747 3.05797 10.5382 3.01825 10.5 2.98054V4.99992C10.5 5.92039 11.2462 6.66658 12.1667 6.66658H13.5661Z"
                    fill="#767B91"
                  />
                </svg>
                Task Activities
              </NavLink>
            </li>
            <li className="side-bar-li">
              <NavLink to="/flagged-tasks" className="side-bar-link">
                <svg
                  width="16"
                  height="20"
                  viewBox="0 0 16 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3.83333 9.99992C3.83333 9.53968 4.20643 9.16658 4.66667 9.16658H11.3333C11.7936 9.16658 12.1667 9.53968 12.1667 9.99992C12.1667 10.4602 11.7936 10.8333 11.3333 10.8333H4.66667C4.20643 10.8333 3.83333 10.4602 3.83333 9.99992Z"
                    fill="#767B91"
                  />
                  <path
                    d="M4.66667 13.3333C4.20643 13.3333 3.83333 13.7063 3.83333 14.1666C3.83333 14.6268 4.20643 14.9999 4.66667 14.9999H11.3333C11.7936 14.9999 12.1667 14.6268 12.1667 14.1666C12.1667 13.7063 11.7936 13.3333 11.3333 13.3333H4.66667Z"
                    fill="#767B91"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M3.83333 0.833252C1.99238 0.833252 0.5 2.32564 0.5 4.16658V15.8333C0.5 17.6742 1.99238 19.1666 3.83333 19.1666H12.1667C14.0076 19.1666 15.5 17.6742 15.5 15.8333V7.57171C15.5 6.79192 15.2266 6.03681 14.7274 5.43776L11.8898 2.03264C11.2565 1.27266 10.3183 0.833252 9.32906 0.833252H3.83333ZM2.16667 4.16658C2.16667 3.24611 2.91286 2.49992 3.83333 2.49992H8.83333V4.99992C8.83333 6.84087 10.3257 8.33325 12.1667 8.33325H13.8333V15.8333C13.8333 16.7537 13.0871 17.4999 12.1667 17.4999H3.83333C2.91286 17.4999 2.16667 16.7537 2.16667 15.8333V4.16658ZM13.5661 6.66658C13.5299 6.61053 13.4901 6.55647 13.447 6.50474L10.6094 3.09961C10.5747 3.05797 10.5382 3.01825 10.5 2.98054V4.99992C10.5 5.92039 11.2462 6.66658 12.1667 6.66658H13.5661Z"
                    fill="#767B91"
                  />
                </svg>
                Flagged Tasks
              </NavLink>
            </li>

            <li className="side-bar-li">
              <NavLink to="/disputes" className="side-bar-link">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4.62732 9.07873C4.21567 8.8729 4.04882 8.37234 4.25464 7.96069C4.46047 7.54904 4.96103 7.38219 5.37268 7.58802L7.87268 8.83802C8.28433 9.04384 8.45118 9.5444 8.24536 9.95605C8.03953 10.3677 7.53897 10.5346 7.12732 10.3287L4.62732 9.07873Z"
                    fill="#767B91"
                  />
                  <path
                    d="M4.62732 11.5787C4.21567 11.3729 4.04882 10.8723 4.25464 10.4607C4.46047 10.049 4.96103 9.88219 5.37268 10.088L7.87268 11.338C8.28433 11.5438 8.45118 12.0444 8.24536 12.456C8.03953 12.8677 7.53897 13.0346 7.12732 12.8287L4.62732 11.5787Z"
                    fill="#767B91"
                  />
                  <path
                    d="M15.7454 7.96069C15.9512 8.37234 15.7843 8.8729 15.3727 9.07873L12.8727 10.3287C12.461 10.5346 11.9605 10.3677 11.7546 9.95605C11.5488 9.5444 11.7157 9.04384 12.1273 8.83802L14.6273 7.58802C15.039 7.38219 15.5395 7.54904 15.7454 7.96069Z"
                    fill="#767B91"
                  />
                  <path
                    d="M15.7454 10.4607C15.9512 10.8723 15.7843 11.3729 15.3727 11.5787L12.8727 12.8287C12.461 13.0346 11.9605 12.8677 11.7546 12.456C11.5488 12.0444 11.7157 11.5438 12.1273 11.338L14.6273 10.088C15.039 9.88219 15.5395 10.049 15.7454 10.4607Z"
                    fill="#767B91"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M10 16.6667C10.2918 17.4473 10.2919 17.4473 10.2919 17.4472L10.2995 17.4444L10.3196 17.4368L10.3951 17.4081C10.4604 17.3832 10.5548 17.3468 10.6726 17.3007C10.9081 17.2084 11.2379 17.0767 11.6171 16.9181C12.37 16.6032 13.3385 16.1735 14.1489 15.7317C15.0489 15.241 16.3788 14.6806 17.1746 14.3588C17.8678 14.0784 18.3333 13.4054 18.3333 12.6461V4.64104C18.3333 3.44002 17.1836 2.5395 16.0005 2.9031C15.2203 3.14289 14.1985 3.47921 13.4173 3.81931C12.6013 4.17462 11.6282 4.71667 10.8774 5.157C10.5332 5.35888 10.2294 5.54314 10 5.68431C9.77062 5.54314 9.46681 5.35888 9.1226 5.157C8.37185 4.71667 7.39875 4.17462 6.58265 3.81931C5.80148 3.47921 4.77973 3.14289 3.99949 2.9031C2.81637 2.5395 1.66667 3.44002 1.66667 4.64104V12.6461C1.66667 13.4054 2.13217 14.0784 2.82542 14.3588C3.62115 14.6806 4.95106 15.241 5.85112 15.7317C6.66152 16.1735 7.63004 16.6032 8.38292 16.9181C8.76207 17.0767 9.09195 17.2084 9.3274 17.3007C9.4452 17.3468 9.53957 17.3832 9.60487 17.4081L9.68038 17.4368L9.70051 17.4444L9.70747 17.447C9.70752 17.447 9.70819 17.4473 10 16.6667ZM3.50988 4.49623C3.43337 4.47272 3.33333 4.52428 3.33333 4.64104V12.6461C3.33333 12.7148 3.3761 12.7837 3.4504 12.8137C4.2455 13.1353 5.65579 13.727 6.64888 14.2684C7.38382 14.669 8.2903 15.0727 9.02609 15.3805C9.07379 15.4005 9.12068 15.42 9.16667 15.439V7.12849C8.94114 6.98936 8.63204 6.80145 8.27942 6.59464C7.53918 6.16048 6.63728 5.66087 5.91735 5.34743C5.22708 5.04691 4.28059 4.73309 3.50988 4.49623ZM10.8333 7.12849V15.439C10.8793 15.42 10.9262 15.4005 10.9739 15.3805C11.7097 15.0727 12.6162 14.669 13.3511 14.2684C14.3442 13.727 15.7545 13.1353 16.5496 12.8137C16.6239 12.7837 16.6667 12.7148 16.6667 12.6461V4.64104C16.6667 4.52428 16.5666 4.47272 16.4901 4.49623C15.7194 4.73309 14.7729 5.04691 14.0827 5.34743C13.3627 5.66087 12.4608 6.16048 11.7206 6.59464C11.368 6.80145 11.0589 6.98936 10.8333 7.12849Z"
                    fill="#767B91"
                  />
                  <path
                    d="M10 16.6667L10.2919 17.4472C10.1037 17.5176 9.89565 17.5174 9.70747 17.447L10 16.6667Z"
                    fill="#767B91"
                  />
                </svg>
                Dispute Resolution
              </NavLink>
            </li>

            <li className="side-bar-li">
              <NavLink to="/contracts" className="side-bar-link">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4.62732 9.07873C4.21567 8.8729 4.04882 8.37234 4.25464 7.96069C4.46047 7.54904 4.96103 7.38219 5.37268 7.58802L7.87268 8.83802C8.28433 9.04384 8.45118 9.5444 8.24536 9.95605C8.03953 10.3677 7.53897 10.5346 7.12732 10.3287L4.62732 9.07873Z"
                    fill="#767B91"
                  />
                  <path
                    d="M4.62732 11.5787C4.21567 11.3729 4.04882 10.8723 4.25464 10.4607C4.46047 10.049 4.96103 9.88219 5.37268 10.088L7.87268 11.338C8.28433 11.5438 8.45118 12.0444 8.24536 12.456C8.03953 12.8677 7.53897 13.0346 7.12732 12.8287L4.62732 11.5787Z"
                    fill="#767B91"
                  />
                  <path
                    d="M15.7454 7.96069C15.9512 8.37234 15.7843 8.8729 15.3727 9.07873L12.8727 10.3287C12.461 10.5346 11.9605 10.3677 11.7546 9.95605C11.5488 9.5444 11.7157 9.04384 12.1273 8.83802L14.6273 7.58802C15.039 7.38219 15.5395 7.54904 15.7454 7.96069Z"
                    fill="#767B91"
                  />
                  <path
                    d="M15.7454 10.4607C15.9512 10.8723 15.7843 11.3729 15.3727 11.5787L12.8727 12.8287C12.461 13.0346 11.9605 12.8677 11.7546 12.456C11.5488 12.0444 11.7157 11.5438 12.1273 11.338L14.6273 10.088C15.039 9.88219 15.5395 10.049 15.7454 10.4607Z"
                    fill="#767B91"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M10 16.6667C10.2918 17.4473 10.2919 17.4473 10.2919 17.4472L10.2995 17.4444L10.3196 17.4368L10.3951 17.4081C10.4604 17.3832 10.5548 17.3468 10.6726 17.3007C10.9081 17.2084 11.2379 17.0767 11.6171 16.9181C12.37 16.6032 13.3385 16.1735 14.1489 15.7317C15.0489 15.241 16.3788 14.6806 17.1746 14.3588C17.8678 14.0784 18.3333 13.4054 18.3333 12.6461V4.64104C18.3333 3.44002 17.1836 2.5395 16.0005 2.9031C15.2203 3.14289 14.1985 3.47921 13.4173 3.81931C12.6013 4.17462 11.6282 4.71667 10.8774 5.157C10.5332 5.35888 10.2294 5.54314 10 5.68431C9.77062 5.54314 9.46681 5.35888 9.1226 5.157C8.37185 4.71667 7.39875 4.17462 6.58265 3.81931C5.80148 3.47921 4.77973 3.14289 3.99949 2.9031C2.81637 2.5395 1.66667 3.44002 1.66667 4.64104V12.6461C1.66667 13.4054 2.13217 14.0784 2.82542 14.3588C3.62115 14.6806 4.95106 15.241 5.85112 15.7317C6.66152 16.1735 7.63004 16.6032 8.38292 16.9181C8.76207 17.0767 9.09195 17.2084 9.3274 17.3007C9.4452 17.3468 9.53957 17.3832 9.60487 17.4081L9.68038 17.4368L9.70051 17.4444L9.70747 17.447C9.70752 17.447 9.70819 17.4473 10 16.6667ZM3.50988 4.49623C3.43337 4.47272 3.33333 4.52428 3.33333 4.64104V12.6461C3.33333 12.7148 3.3761 12.7837 3.4504 12.8137C4.2455 13.1353 5.65579 13.727 6.64888 14.2684C7.38382 14.669 8.2903 15.0727 9.02609 15.3805C9.07379 15.4005 9.12068 15.42 9.16667 15.439V7.12849C8.94114 6.98936 8.63204 6.80145 8.27942 6.59464C7.53918 6.16048 6.63728 5.66087 5.91735 5.34743C5.22708 5.04691 4.28059 4.73309 3.50988 4.49623ZM10.8333 7.12849V15.439C10.8793 15.42 10.9262 15.4005 10.9739 15.3805C11.7097 15.0727 12.6162 14.669 13.3511 14.2684C14.3442 13.727 15.7545 13.1353 16.5496 12.8137C16.6239 12.7837 16.6667 12.7148 16.6667 12.6461V4.64104C16.6667 4.52428 16.5666 4.47272 16.4901 4.49623C15.7194 4.73309 14.7729 5.04691 14.0827 5.34743C13.3627 5.66087 12.4608 6.16048 11.7206 6.59464C11.368 6.80145 11.0589 6.98936 10.8333 7.12849Z"
                    fill="#767B91"
                  />
                  <path
                    d="M10 16.6667L10.2919 17.4472C10.1037 17.5176 9.89565 17.5174 9.70747 17.447L10 16.6667Z"
                    fill="#767B91"
                  />
                </svg>
                Contracts
              </NavLink>
            </li>

            <div className="sidebar">
              <li className="side-bar-li">
                <NavLink to="/report" className="side-bar-link">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4.41074 11.9781C4.08531 11.6527 4.08531 11.1251 4.41074 10.7996L7.74408 7.46629C8.0466 7.16377 8.52907 7.13949 8.86045 7.41011L9.92198 8.27703L12.7232 5.26574C12.8804 5.09668 13.1008 5.00044 13.3317 5C13.5626 4.99955 13.7834 5.09492 13.9413 5.26338L15.6079 7.04115C15.9227 7.37691 15.9057 7.90428 15.57 8.21905C15.2342 8.53383 14.7068 8.51682 14.3921 8.18106L13.3357 7.05428L10.6102 9.98425C10.3109 10.306 9.81322 10.34 9.47289 10.0621L8.38981 9.17759L5.58926 11.9781C5.26382 12.3036 4.73618 12.3036 4.41074 11.9781Z"
                      fill="#767B91"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M0.833334 4.16659C0.833334 2.32564 2.32572 0.833252 4.16667 0.833252H15.8333C17.6743 0.833252 19.1667 2.32564 19.1667 4.16659V12.4999C19.1667 14.3409 17.6743 15.8333 15.8333 15.8333H12.0118L13.9226 17.744C14.248 18.0694 14.248 18.5971 13.9226 18.9225C13.5972 19.2479 13.0695 19.2479 12.7441 18.9225L10 16.1784L7.25592 18.9225C6.93049 19.2479 6.40285 19.2479 6.07741 18.9225C5.75197 18.5971 5.75197 18.0694 6.07741 17.744L7.98815 15.8333H4.16667C2.32572 15.8333 0.833334 14.3409 0.833334 12.4999V4.16659ZM15.8333 14.1666C16.7538 14.1666 17.5 13.4204 17.5 12.4999V4.16659C17.5 3.24611 16.7538 2.49992 15.8333 2.49992H4.16667C3.24619 2.49992 2.5 3.24611 2.5 4.16659V12.4999C2.5 13.4204 3.24619 14.1666 4.16667 14.1666H15.8333Z"
                      fill="#767B91"
                    />
                  </svg>
                  Report
                </NavLink>
              </li>
              <li className="side-bar-li">
                <AddBtn />
              </li>
              <li className="side-bar-li">
                <NavLink to="/settings" className="side-bar-link">
                  <svg
                    width="18"
                    height="16"
                    viewBox="0 0 18 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M11.5 0.5C13.0532 0.5 14.3583 1.56231 14.7283 3H16.5C16.9602 3 17.3333 3.3731 17.3333 3.83333C17.3333 4.29357 16.9602 4.66667 16.5 4.66667H14.7283C14.3583 6.10436 13.0532 7.16667 11.5 7.16667C9.9468 7.16667 8.64172 6.10436 8.27168 4.66667L1.5 4.66667C1.03976 4.66667 0.666666 4.29357 0.666666 3.83333C0.666666 3.3731 1.03976 3 1.5 3L8.27168 3C8.64172 1.56231 9.9468 0.5 11.5 0.5ZM11.5 2.16667C12.4205 2.16667 13.1667 2.91286 13.1667 3.83333C13.1667 4.75381 12.4205 5.5 11.5 5.5C10.5795 5.5 9.83333 4.75381 9.83333 3.83333C9.83333 2.91286 10.5795 2.16667 11.5 2.16667Z"
                      fill="#767B91"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M3.27168 11.3333H1.5C1.03976 11.3333 0.666666 11.7064 0.666666 12.1667C0.666666 12.6269 1.03976 13 1.5 13H3.27168C3.64172 14.4377 4.9468 15.5 6.5 15.5C8.0532 15.5 9.35828 14.4377 9.72832 13L16.5 13C16.9602 13 17.3333 12.6269 17.3333 12.1667C17.3333 11.7064 16.9602 11.3333 16.5 11.3333L9.72832 11.3333C9.35828 9.89564 8.0532 8.83333 6.5 8.83333C4.9468 8.83333 3.64172 9.89564 3.27168 11.3333ZM6.5 13.8333C7.42047 13.8333 8.16667 13.0871 8.16667 12.1667C8.16667 11.2462 7.42047 10.5 6.5 10.5C5.57952 10.5 4.83333 11.2462 4.83333 12.1667C4.83333 13.0871 5.57952 13.8333 6.5 13.8333Z"
                      fill="#767B91"
                    />
                  </svg>
                  Settings
                </NavLink>
              </li>

              <LogOut />
            </div>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default SideBar;
