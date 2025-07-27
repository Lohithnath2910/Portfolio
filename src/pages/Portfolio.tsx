import React from 'react';
// Reusable SkillItem for Home and Portfolio
const SkillItem = ({ name, icon }: { name: string; icon: string }) => (
  <div className="flex flex-col items-center p-4 bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-lg transition-all duration-300">
    <img src={icon} alt={name} className="w-10 h-10 mb-2" loading="lazy" />
    <span className="text-xs sm:text-sm font-medium text-foreground dark:text-foreground text-center">{name}</span>
  </div>
);
import { ArrowRight } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { siteConfig } from '../content';

// Portfolio page component - combines About, Projects, and Experience
export const Portfolio: React.FC = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-foreground dark:text-foreground">
      {/* About Me Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 max-w-7xl pt-20 sm:pt-16">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          <div className="order-2 lg:order-1 flex justify-center">
            {/* Developer SVG illustration */}
            <svg width="350" height="380" viewBox="0 0 530 572" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full max-w-xs sm:max-w-sm lg:max-w-md xl:max-w-lg">
              <path d="M515.447 0H14C7.37258 0 2 5.37261 2 12V513.447C2 520.074 7.37261 525.447 14 525.447H515.447C522.074 525.447 527.447 520.074 527.447 513.447V12C527.447 5.37258 522.074 0 515.447 0Z" stroke="black" strokeWidth="4" strokeMiterlimit="10"/>
              <path d="M113.085 526.403H387.62C388.773 515.912 346.721 292.825 297.324 221.108C291.716 212.969 243.71 207.047 226.087 227.292C132.734 334.5 110.83 523.833 113.085 526.403Z" fill="black"/>
              <path d="M303.835 239.622C311.627 259.809 341.023 330.584 357 381.378C367.721 415.465 371.803 444.073 374.149 451.59C374.149 451.59 293.088 425.552 274.836 425.507C246.728 425.437 201.638 484.145 212.699 491.496C230.086 503.063 312.967 542.399 379.154 554.748C415.131 561.464 482.921 515.733 477.563 479.377C470.046 428.353 377.84 293.857 342.76 255.72C324.547 235.924 294.337 215.02 303.835 239.622Z" fill="#FF9581"/>
              <path d="M482.504 490.163C480.806 526.916 434.831 557.856 408.165 559.49C362.178 562.278 224.222 522.103 224.222 522.103L277.848 418.791C277.848 418.791 371.72 450.654 374.104 451.551V451.513C373.277 448.777 350.143 361.845 339.806 333.039C339.255 331.449 338.614 329.822 338.011 328.111C335.038 320.132 330.956 309.596 326.444 298.215L326.399 298.132C323.9 291.832 321.259 285.244 318.664 278.746V278.707C307.327 250.542 296.279 223.735 296.279 223.735C312.082 226.331 327.687 234.636 353.308 261.526C378.878 288.384 485.311 429.532 482.504 490.163Z" fill="black"/>
              <path d="M259.975 499.75C263.801 492.438 267.691 485.157 271.53 477.852C275.298 470.7 279.111 463.574 282.956 456.46C286.929 449.103 291.101 441.759 294.312 434.03C294.37 433.883 294.171 433.761 294.075 433.889C289.249 440.253 285.276 447.27 281.309 454.185C277.201 461.35 273.196 468.579 269.229 475.827C265.339 482.927 261.596 490.098 257.905 497.295C254.111 504.703 250.279 512.381 247.536 520.251C247.427 520.565 247.863 520.872 248.068 520.565C252.503 513.983 256.297 506.773 259.975 499.75Z" fill="#2B454E"/>
              <path d="M402.814 466.797L374.149 451.596L374.104 451.558V451.519C373.277 448.783 350.143 361.851 339.806 333.045C339.255 331.456 338.614 329.828 338.011 328.117C335.038 320.138 330.956 309.603 326.444 298.221L402.814 466.797Z" fill="#1C1C1C"/>
              <path d="M426.545 479.409C418.586 473.462 410.005 468.143 401.36 463.253C397.04 460.805 392.631 458.556 388.101 456.531C383.281 454.378 378.187 452.82 373.399 450.654C373.034 450.488 372.765 451.052 373.13 451.218C377.603 453.243 381.852 456.063 386.172 458.415C390.664 460.863 395.176 463.273 399.726 465.612C408.659 470.207 417.432 475.083 426.315 479.775C426.526 479.89 426.744 479.557 426.545 479.409Z" fill="#1C1C1C"/>
              <path d="M405.672 457.153C398.476 457.249 355.039 445.649 348.714 451.609C310.16 487.952 297.971 480.633 289.762 485.369C226.234 521.917 141.398 564.854 111.118 565.123C65.1944 565.495 46.9045 526.954 54.5499 490.541C69.642 418.56 166.718 278.208 210.642 240.91C233.931 221.165 232.091 250.946 222.459 283.322C216.807 302.304 206.925 330.527 196.845 358.224C187.918 382.897 164.257 445.944 163.847 447.424V447.463C163.809 447.546 163.77 447.591 163.777 447.636C163.745 447.802 163.911 447.835 164.283 447.732C166.302 447.36 220.627 421.758 275.259 407.692C294.51 402.738 334.602 395.676 348.976 402.091C357.525 405.904 357.666 411.005 357.666 411.005C357.666 411.005 364.517 410.383 371.746 416.33C376.539 420.278 378.026 425.86 378.026 425.86C378.026 425.86 385.524 426.911 389.427 431.256C394.079 436.44 394.49 441.926 394.49 441.926C404.615 444.63 405.672 457.153 405.672 457.153Z" fill="white"/>
              <path d="M341.504 409.486C335.711 409.569 330.059 410.409 324.368 411.408C323.983 411.479 323.996 412.075 324.406 412.03C329.994 411.415 335.653 411.287 341.267 411.101C346.849 410.915 352.52 410.793 358.102 410.909C358.134 410.909 358.141 410.851 358.109 410.845C352.54 409.928 347.169 409.403 341.504 409.486Z" fill="#1A2E35"/>
              <path d="M377.866 425.527C367.92 422.797 359.993 421.284 347.502 422.848C347.099 422.899 347.131 423.495 347.528 423.469C359.397 422.733 367.138 423.937 377.847 425.738C377.968 425.764 377.975 425.559 377.866 425.527Z" fill="#1A2E35"/>
              <path d="M394.381 441.593C384.409 437.491 376.732 436.209 365.664 436.209C365.273 436.209 365.145 436.786 365.549 436.825C376.168 437.837 383.935 439.362 394.233 442.041C394.49 442.105 394.624 441.695 394.381 441.593Z" fill="#1A2E35"/>
              <path d="M272.606 408.326C267.838 408.948 263.07 410.351 258.405 411.498C253.432 412.722 248.471 414.075 243.601 415.683C233.847 418.9 224.382 422.758 215.045 427.013C214.686 427.18 214.878 427.731 215.263 427.597C224.773 424.264 234.379 421.143 243.992 418.118C248.721 416.632 253.419 415.049 258.129 413.511C262.961 411.928 267.992 410.729 272.741 408.929C273.061 408.807 272.965 408.275 272.606 408.326Z" fill="#1A2E35"/>
              <path d="M234.61 418.624C244.665 415.222 249.209 415.202 249.209 415.202L306.366 511.721C306.366 511.721 148.935 568.398 116.616 571.711C84.2919 575.024 47.5198 549.57 46.8982 508.991C46.0266 451.955 139.033 314.986 185.822 262.02C207.265 237.744 232.264 220.114 238.641 224.094C246.171 228.791 232.495 259.315 225.286 282.085C211.982 324.118 164.296 447.732 164.296 447.732C164.296 447.732 222.633 422.681 234.61 418.624Z" fill="black"/>
              <path d="M248.696 415.125C239.827 415.645 201.484 429 182.682 437.068C163.943 445.111 145.916 454.653 129.004 466.073C119.436 472.533 110.355 479.563 101.383 486.824C101.076 487.074 101.409 487.574 101.742 487.337C118.276 475.513 135.938 464.964 153.811 455.307C171.595 445.7 189.705 436.581 208.553 429.231C219.287 425.046 237.744 418.778 248.228 416.029C251.195 415.247 248.971 415.106 248.696 415.125Z" fill="#1C1C1C"/>
              <path d="M210.95 330.725C208.553 334.596 206.124 338.441 204.073 342.517C203.977 342.709 203.887 342.901 203.791 343.094C206.835 333.833 209.726 324.547 212.494 315.197C212.667 314.621 211.712 314.313 211.494 314.871C197.966 349.131 185.412 383.807 173.236 418.573C169.826 428.295 166.84 438.119 163.745 447.937C163.636 448.277 164.193 448.45 164.334 448.129C168.051 439.709 171.794 431.345 175.197 422.777C178.599 414.215 181.759 405.558 184.957 396.919C190.545 381.814 195.87 366.632 201.004 351.374C202.612 348.701 204.234 346.035 205.752 343.318C207.963 339.351 209.783 335.198 211.629 331.052C211.828 330.597 211.2 330.322 210.95 330.725Z" fill="#1C1C1C"/>
              <path d="M268.062 490.701C263.871 483.588 259.744 476.442 255.572 469.322C251.484 462.344 247.453 455.339 243.441 448.322C239.295 441.061 235.264 433.64 230.4 426.828C230.31 426.699 230.092 426.808 230.156 426.956C233.008 434.415 236.866 441.497 240.647 448.514C244.562 455.788 248.587 463.004 252.644 470.2C256.617 477.25 260.725 484.216 264.89 491.156C269.171 498.289 273.67 505.601 278.906 512.086C279.117 512.343 279.604 512.144 279.457 511.798C276.208 504.556 272.087 497.533 268.062 490.701Z" fill="#1C1C1C"/>
              <path d="M308.641 511.926C303.899 502.576 296.523 493.393 291.063 484.498C290.857 484.158 290.351 484.511 290.55 484.85C295.51 493.194 300.054 502.185 304.796 510.67C283.174 519.597 260.218 527.557 238.167 535.369C215.538 543.392 192.762 550.993 169.672 557.645C156.766 561.362 143.84 565.393 130.856 568.802C130.049 569.013 130.266 569.68 131.093 569.52C154.452 565.123 177.388 558.375 200.004 551.198C223.068 543.879 245.831 535.702 268.485 527.236C281.232 522.475 309.026 512.683 308.641 511.926Z" fill="#1C1C1C"/>
              <path d="M271.151 408.39C241.422 416.003 207.214 428.532 191.884 434.53C191.481 434.671 191.115 434.812 190.75 434.947C177.247 440.253 168.884 444.188 166.878 444.521C166.712 444.444 166.584 444.329 166.455 444.252V444.214C165.052 443.201 163.661 442.432 162.277 441.913C158.47 440.548 121.891 435.979 122.813 424.648C123.704 413.44 138.61 414.138 140.802 414.292C138.431 413.773 118.577 409.121 125.044 399.207C129.613 392.176 149.274 393.208 151.254 393.285C149.249 392.625 131.01 386.678 137.284 376.559C141.776 369.317 163.725 370.259 166.257 370.689C164.206 369.907 147.948 367.183 155.535 358.461C160.803 352.386 202.132 358.564 220.505 367.734C247.824 381.372 271.151 408.39 271.151 408.39Z" fill="white"/>
              <path d="M191.884 434.531C191.481 434.672 191.115 434.813 190.75 434.947C184.406 430.019 160.399 417.305 141.539 414.889C140.373 414.741 140.296 414.068 141.533 414.126C164.821 415.183 185.758 428.898 191.884 434.531Z" fill="#1A2E35"/>
              <path d="M152.152 394.035C178.183 399.2 189.949 404.949 212.334 419.169C212.648 419.368 213 418.906 212.699 418.676C191.833 403.058 178.849 395.323 152.376 393.375C151.177 393.285 150.96 393.798 152.152 394.035Z" fill="#1A2E35"/>
              <path d="M167.058 371.227C192.032 377.866 205.195 383.621 225.311 399.899C225.785 400.283 226.369 399.7 225.933 399.271C206.976 380.885 190.596 373.598 167.295 370.535C165.706 370.33 165.488 370.811 167.058 371.227Z" fill="#1A2E35"/>
              <path d="M292.107 271.075C277.316 276.394 248.587 256.124 236.148 238.475C235.302 237.257 235.738 223.434 235.469 206.605C235.27 196.396 234.802 185.028 233.629 174.691L300.265 183.086C300.265 183.086 296.349 205.484 298.503 223.498C298.701 225.004 299.009 226.388 299.432 227.689C299.477 227.881 299.56 228.112 299.605 228.381C301.842 236.289 306.404 265.922 292.107 271.075Z" fill="white" stroke="black" strokeWidth="0.640852" strokeMiterlimit="10"/>
              <path d="M299.631 228.375C299.759 228.804 299.887 229.272 299.97 229.83C260.077 228.138 244.902 210.598 235.084 193.769C234.783 187.354 234.36 180.849 233.629 174.691L300.271 183.073C300.271 183.073 296.337 205.49 298.515 223.498C298.689 224.998 299.028 226.363 299.458 227.689C299.502 227.856 299.541 228.118 299.631 228.375Z" fill="black" stroke="black" strokeWidth="0.640852" strokeMiterlimit="10"/>
              <path d="M206.316 104.793C202.702 128.716 224.536 193.077 242.992 205.426C269.748 223.325 308.699 219.678 322.682 188.623C336.236 158.522 306.296 75.1536 286.134 64.4322C256.437 48.6352 211.655 69.45 206.316 104.793Z" fill="white" stroke="black" strokeWidth="1.2817" strokeMiterlimit="10"/>
              <path d="M267.934 133.74C267.845 133.587 267.665 134.061 267.729 134.234C269.312 138.528 270.408 143.718 266.96 146.468C266.851 146.551 266.941 146.769 267.075 146.698C271.645 144.43 270.126 137.554 267.934 133.74Z" fill="black"/>
              <path d="M262.538 130.504C255.38 132.305 259.507 146.493 266.14 144.827C272.67 143.18 268.543 128.992 262.538 130.504Z" fill="black"/>
              <path d="M294.671 125.691C294.658 125.512 295.074 125.8 295.119 125.98C296.26 130.414 298.311 135.304 302.713 135.605C302.848 135.612 302.906 135.843 302.752 135.862C297.695 136.592 295.036 130.075 294.671 125.691Z" fill="black"/>
              <path d="M297.26 119.956C304.174 117.36 308.853 131.382 302.444 133.779C296.144 136.15 291.466 122.128 297.26 119.956Z" fill="black"/>
              <path d="M255.053 125.64C256.841 124.589 258.322 123.327 259.988 122.103C261.865 120.725 263.5 119.821 264.326 117.54C264.769 116.316 263.935 114.592 262.788 114.047C260.11 112.785 257.392 113.9 255.066 115.463C252.541 117.162 251.029 119.116 250.144 122.026C249.286 124.845 252.688 127.024 255.053 125.64Z" fill="black"/>
              <path d="M300.669 111.214C298.605 111.464 296.663 111.355 294.606 111.394C292.28 111.439 290.428 111.714 288.384 110.394C287.288 109.689 286.91 107.812 287.493 106.684C288.852 104.056 291.69 103.294 294.491 103.127C297.529 102.947 299.919 103.582 302.38 105.363C304.77 107.087 303.386 110.881 300.669 111.214Z" fill="black"/>
              <path d="M278.104 174.486C279.457 175.21 280.918 176.319 282.552 175.992C284.116 175.678 285.711 174.467 286.955 173.512C287.076 173.416 287.262 173.524 287.211 173.685C286.564 175.703 284.468 177.459 282.328 177.696C280.238 177.927 278.752 176.492 277.739 174.813C277.598 174.575 277.906 174.383 278.104 174.486Z" fill="black"/>
              <path d="M278.893 159.983C282.462 163.085 286.685 164.117 290.819 163.732C292.665 163.572 294.523 163.098 296.273 162.412C296.625 162.303 296.965 162.162 297.266 161.996C297.574 161.861 297.856 161.739 298.189 161.566C298.682 161.342 298.842 160.836 298.785 160.323L298.772 160.291C298.721 160.131 298.682 160.003 298.599 159.855C298.599 159.855 298.599 159.855 298.593 159.823L298.471 159.439C297.58 156.029 295.754 150.979 295.754 150.979C297.17 151.236 304.303 152.242 303.687 150.499C298.554 136.118 292.851 120.122 284.705 106.895C284.462 106.447 283.757 106.774 283.936 107.241C288.32 121.257 295.145 134.407 299.772 148.422C297.535 148.243 293.844 147.782 292.081 148.333C291.639 148.608 295.786 158.029 296.061 159.592C296.061 159.592 296.08 159.657 296.08 159.766C290.608 162.149 285.82 161.675 279.188 159.464C278.79 159.311 278.527 159.708 278.893 159.983Z" fill="black"/>
              <path opacity="0.2" d="M213.34 150.133C217.115 147.044 221.883 131.215 224.1 124.679C226.401 117.886 219.575 90.3483 217.345 82.1582C211.712 88.5155 207.745 96.289 206.348 105.043C204.746 115.008 207.848 132.67 213.34 150.133Z" fill="black"/>
              <path d="M276.342 90.0726C273.144 96.9682 266.665 101.903 259.065 102.813C251.663 103.697 243.236 100.833 238.724 94.6996C238.59 94.5201 238.308 94.7252 238.442 94.911C243.268 101.461 250.939 105.793 259.257 104.594C267.063 103.466 274.138 97.6924 276.842 90.2969C276.957 89.9637 276.49 89.7522 276.342 90.0726Z" fill="#1A2E35"/>
              <path d="M239.397 44.0917C227.202 47.892 217.89 57.9213 215.807 67.5725C214.538 73.4363 215.615 78.7105 217.948 83.722C218.044 83.9271 218.467 83.754 218.39 83.5425C215.295 75.4358 216.679 64.7912 223.914 56.4281C230.867 48.3982 241.723 43.406 252.624 44.3096C258.315 44.7774 263.41 46.841 266.685 50.199C267.05 50.5771 267.889 50.0196 267.562 49.6223C262.019 42.919 250.433 40.6568 239.397 44.0917Z" fill="#1A2E35"/>
              <path d="M318.318 50.2119C314.646 44.7262 308.936 40.7594 302.604 38.9778C293.735 36.4785 285.417 39.6187 277.22 42.8998C276.996 42.9895 277.137 43.3356 277.355 43.2459C284.346 40.471 291.594 38.0678 299.182 39.5482C305.366 40.7594 311.205 44.0598 315.21 48.9559C323.528 59.1198 322.951 74.8527 313.723 84.2476C308.5 89.5666 301.002 92.5786 293.555 92.3351C293.261 92.3287 293.177 92.7773 293.479 92.7965C307.199 93.604 320.228 83.7092 322.413 69.995C323.496 63.2276 322.157 55.9347 318.318 50.2119Z" fill="#1A2E35"/>
              <path d="M206.169 118.488C206.169 118.488 188.283 99.8137 194.441 84.3308C197.928 75.5575 216.538 71.3215 216.538 71.3215C216.538 71.3215 219.467 59.1068 233.681 51.3333C248.042 43.4829 268.825 47.2895 268.825 47.2895C268.825 47.2895 281.046 34.825 296.907 38.7726C319.023 44.2775 324.835 73.9554 308.301 88.695C296.689 99.0447 275.054 92.2901 275.054 92.2901C273.362 93.0271 258.43 108.959 240.294 96.7376C240.294 96.7376 232.008 109.689 220.14 105.601C220.146 105.607 217.935 117.001 206.169 118.488Z" fill="black"/>
              <path d="M299.413 226.972L285.237 266.185L235.635 219.377L222.696 235.495C222.696 235.495 272.35 310.974 272.51 307.469L287.089 273.741L310.826 295.914L306.77 238.129L299.413 226.972Z" fill="#EDEFEF"/>
              <path d="M310.442 267.236C309.449 257.72 308.718 248.1 307.289 238.641C307.238 238.308 306.706 238.174 306.635 238.577C305.072 247.863 309.051 284.244 309.346 292.992C309.314 292.96 309.276 292.928 309.244 292.896C308.25 291.935 287.282 273.427 287.089 273.735C283.853 279.124 273.151 303.688 272.439 305.912C264.589 293.921 234.572 250.388 225.388 239.116C225.125 238.789 224.619 239.084 224.831 239.468C231.848 252.176 271.6 310.827 272.17 310.635C272.574 310.923 285.891 280.662 287.403 274.984C290.986 279.054 312.243 300.035 312.256 298.612C312.358 289.032 311.429 276.766 310.442 267.236Z" fill="#1C1C1C"/>
              <path d="M228.394 156.612C228.394 156.612 209.905 137.797 201.125 144.737C192.346 151.678 208.745 180.702 220.812 183.022C232.88 185.342 235.244 174.217 235.244 174.217L228.394 156.612Z" fill="white" stroke="black" strokeWidth="1.2817" strokeMiterlimit="10"/>
              <path d="M206.034 152.934C205.849 152.946 205.855 153.209 206.028 153.248C214.532 155.138 219.967 161.816 224.19 168.981C221.325 166.43 217.833 165.36 214.353 168.84C214.173 169.025 214.423 169.314 214.641 169.23C217.788 167.987 220.236 168.154 222.876 170.397C224.747 171.986 226.208 174.146 227.682 176.094C228.176 176.741 229.4 176.145 228.99 175.37C228.958 175.312 228.926 175.254 228.894 175.197C227.381 165.014 217.108 152.126 206.034 152.934Z" fill="#1A2E35"/>
            </svg>
          </div>
          
          <div className="order-1 lg:order-2 space-y-4 sm:space-y-6">
            <div className="flex flex-wrap items-center gap-2 sm:gap-4">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-normal text-foreground dark:text-foreground">
                About
              </h1>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-foreground dark:text-foreground">
                Me
              </h1>
            </div>
            
            <div className="space-y-3 sm:space-y-4 text-foreground/80 dark:text-foreground/80 text-sm sm:text-base lg:text-lg leading-relaxed">
              <ul className="list-disc pl-6 space-y-2 text-foreground dark:text-foreground text-base sm:text-lg">
                {siteConfig.aboutbio.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>
              <div className="mt-4">
                <h3 className="font-bold text-lg mb-2 text-foreground dark:text-foreground">Education</h3>
                <ul className="list-disc ml-6 text-sm text-foreground dark:text-foreground">
                  <li><span className="font-semibold text-foreground dark:text-foreground">B.Tech - Computer Science and Engineering</span>, Vellore Institute of Technology, Vellore, India (2023 - 2027) <br /><span className="font-semibold text-foreground dark:text-foreground">CGPA</span>: 9.45/10</li>
                  <br></br>                  
                  <li><span className="font-semibold text-foreground dark:text-foreground">12th Standard (MPC)</span>, Sri Chaitanya Junior Kalashala, Hyderabad, India (2021 - 2023) <br /><span className="font-semibold text-foreground dark:text-foreground">Percentage</span>: 97.6%</li>
                  <br></br>                  
                  <li><span className="font-semibold text-foreground dark:text-foreground">10th Standard</span>, Sri Chaitanya Techno School, Hyderabad, India (2020 - 2021) <br /><span className="font-semibold text-foreground dark:text-foreground">CGPA</span>: 10</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="bg-gray-900 py-12 sm:py-16 lg:py-20 text-white dark:text-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-8 sm:mb-12">
            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 mb-4 sm:mb-6">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal text-white dark:text-foreground">My</h2>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white dark:text-foreground">Experience</h2>
            </div>
          </div>
          
          <div className="space-y-4 sm:space-y-6">
            {siteConfig.experience.map((exp, index) => (
              <Card
                key={index}
                className={`border transition-all duration-300 transform hover:scale-[1.025] hover:shadow-2xl hover:border-cyan-400/60 hover:bg-gray-800/80 ${
                  exp.highlighted
                    ? 'bg-gray-800 border-transparent shadow-lg'
                    : 'bg-transparent border-gray-600'
                }`}
              >
                <CardContent className="p-4 sm:p-6">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4 mb-3 sm:mb-4">
                    <div className="flex items-center gap-3 sm:gap-6">
                      {/* Directly add logos for IIT Delhi and Scientiflow experiences */}
                      {exp.title && exp.title.toLowerCase().includes('iit delhi') && (
                        <img
                          src="/iitd-logo.png"
                          alt="IIT Delhi logo"
                          className="w-10 h-10 object-contain rounded bg-white border border-gray-200 dark:bg-gray-900 dark:border-gray-700"
                        />
                      )}
                      {exp.title && exp.title.toLowerCase().includes('scientiflow') && (
                        <img
                          src="/scientiflow-logo.png"
                          alt="Scientiflow logo"
                          className="w-10 h-10 object-contain rounded bg-white border border-gray-200 dark:bg-gray-900 dark:border-gray-700"
                        />
                      )}
                      <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white dark:text-foreground tracking-wide drop-shadow-md font-sans" style={{fontFamily: 'Montserrat, Inter, Arial, sans-serif'}}>
                        {exp.title}
                      </h3>
                    </div>
                    <div className="flex flex-col items-end">
                      <span className="inline-block px-3 py-1 rounded-full bg-gray-800/90 dark:bg-gray-700/90 text-cyan-300 font-semibold shadow-sm text-xs sm:text-sm md:text-base mb-1 border border-cyan-700/40 tracking-wide">
                        {exp.period}
                      </span>
                      {exp.location && (
                        <span className="inline-block px-3 py-1 rounded-full bg-gray-800/90 dark:bg-gray-700/90 text-blue-300 font-semibold shadow-sm text-xs sm:text-sm md:text-base mt-1 border border-blue-700/40 tracking-wide">
                          {exp.location}
                        </span>
                      )}
                    </div>
                  </div>
                  {Array.isArray(exp.description) && exp.description.length > 0 && (
                    <>
                      <p className="font-semibold text-gray-200 dark:text-foreground text-sm sm:text-base mb-2">
                        {exp.description[0]}
                      </p>
                      <ul className="list-disc pl-6 space-y-2 text-gray-300 dark:text-foreground/80 text-sm sm:text-base">
                        {exp.description.slice(1).map((point, idx) => (
                          <li key={idx}>{point}</li>
                        ))}
                      </ul>
                    </>
                  )}
                  {(!Array.isArray(exp.description) || exp.description.length === 0) && (
                    <p className="font-semibold text-gray-200 dark:text-foreground text-sm sm:text-base mb-2">
                      {exp.description}
                    </p>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Skill Set Section */}
      <section className="bg-gray-50 dark:bg-gray-800 py-12 sm:py-16 lg:py-20 text-foreground dark:text-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground dark:text-foreground mb-4">My Skill Set</h2>
            <p className="text-base sm:text-lg text-foreground/80 dark:text-foreground/80 max-w-2xl mx-auto">A categorized overview of my technical and soft skills.</p>
          </div>
          {/* Programming Languages */}
          <div className="mb-10">
            <h3 className="text-xl sm:text-2xl font-bold mb-4 text-foreground dark:text-foreground">Programming Languages</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {[
                { name: 'Python', icon: '/python-svgrepo-com.svg' },
                { name: 'C++', icon: '/cpp3-svgrepo-com.svg' },
                { name: 'JavaScript', icon: '/javascript-svgrepo-com.svg' },
                { name: 'R', icon: '/r-lang-svgrepo-com.svg' },
                { name: 'C', icon: '/c-svgrepo-com.svg' },
              ].map((skill) => <SkillItem key={skill.name} {...skill} />)}
            </div>
          </div>
          {/* Frameworks & Libraries */}
          <div className="mb-10">
            <h3 className="text-xl sm:text-2xl font-bold mb-4 text-foreground dark:text-foreground">Frameworks & Libraries</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {[
                { name: 'React.js', icon: '/react-svgrepo-com.svg' },
                { name: 'Next.js', icon: '/next-js-svgrepo-com.svg' },
                { name: 'Node.js', icon: '/node-js-svgrepo-com.svg' },
                { name: 'TensorFlow', icon: '/tensorflow-svgrepo-com.svg' },
                { name: 'PyTorch', icon: '/pytorch-svgrepo-com.svg' },
                { name: 'OpenCV', icon: '/opencvmanager-svgrepo-com.svg' },
                { name: 'NumPy', icon: '/numpy-svgrepo-com.svg' },
                { name: 'Pandas', icon: '/pandas-svgrepo-com.svg' },
              ].map((skill) => <SkillItem key={skill.name} {...skill} />)}
            </div>
          </div>
          {/* Tools */}
          <div className="mb-10">
            <h3 className="text-xl sm:text-2xl font-bold mb-4 text-foreground dark:text-foreground">Tools</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 ">
              {[
                { name: 'Git', icon: '/git-svgrepo-com.svg' },
                { name: 'GitHub', icon: '/github.svg'},
                { name: 'VS Code', icon: '/vscode-svgrepo-com.svg' },
                { name: 'Jupyter', icon: '/jupyter-svgrepo-com.svg' },
                { name: 'Colab', icon: '/colab-svgrepo-com.svg' },
              ].map((skill) => <SkillItem key={skill.name} {...skill} />)}
            </div>
          </div>
          {/* Creative Tools */}
          <div className="mb-10">
            <h3 className="text-xl sm:text-2xl font-bold mb-4 text-foreground dark:text-foreground">Creative Tools</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {[
                { name: 'Figma', icon: '/figma-svgrepo-com.svg' },
                { name: 'Photoshop', icon: '/photoshop-cc-logo-svgrepo-com.svg' },
                { name: 'Blender', icon: '/blender-svgrepo-com.svg' },
                { name: 'DaVinci Resolve', icon: '/davinci.svg' },
              ].map((skill) => <SkillItem key={skill.name} {...skill} />)}
            </div>
          </div>
          {/* Soft Skills */}
          <div className="mb-10">
            <h3 className="text-xl sm:text-2xl font-bold mb-4 text-foreground dark:text-foreground">Soft Skills</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {[
                'Problem Solving',
                'Adaptability',
                'Communication',
                'Team Management',
                'Leadership',
                'Public Speaking',
                'Mentoring',
              ].map((skill) => (
                <div key={skill} className="flex flex-col items-center justify-center p-6 bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-lg transition-all duration-300">
                  <span className="text-base sm:text-lg font-medium text-foreground dark:text-foreground text-center">{skill}</span>
                </div>
              ))}
            </div>
          </div>
          {/* Languages Spoken */}
          <div className="mb-10">
            <h3 className="text-xl sm:text-2xl font-bold mb-4 text-foreground dark:text-foreground">Languages Spoken</h3>
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4">
              {['English', 'Telugu', 'Hindi', 'Kannada'].map((lang) => (
                <div key={lang} className="flex flex-col items-center justify-center p-6 bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-lg transition-all duration-300">
                  <span className="text-base sm:text-lg font-medium text-foreground dark:text-foreground text-center">{lang}</span>
                </div>
              ))}
            </div>
          </div>
          {/* Hobbies/Interests (optional) */}
          <div>
            <h3 className="text-xl sm:text-2xl font-bold mb-4 text-foreground dark:text-foreground">Hobbies / Interests</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {[
                
                'Design',
                'Video Editing',
                'Photography',
                'Cricket',
                'Basketball',
                'Movies'
              ].map((hobby) => (
                <div key={hobby} className="flex flex-col items-center justify-center p-6 bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-lg transition-all duration-300">
                  <span className="text-base sm:text-lg font-medium text-foreground dark:text-foreground text-center">{hobby}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="bg-black dark:bg-gray-900 py-12 sm:py-16 lg:py-20 text-white dark:text-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-8 sm:mb-12">
            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 mb-4 sm:mb-6">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal text-white dark:text-foreground">My</h2>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white dark:text-foreground">Projects</h2>
            </div>
          </div>
          <div className="space-y-12 sm:space-y-16 lg:space-y-20">
            {siteConfig.projects.map((project, index) => {
              let projectImage = null;
              if (project.title && project.title.toLowerCase().includes('traffic')) {
                projectImage = '/traffic.png';
              } else if (project.title && project.title.toLowerCase().includes('inferra')) {
                projectImage = '/Inferra.png';
              } else if (project.title && project.title.toLowerCase().includes('swiftbites')) {
                projectImage = '/swiftbites.png';
              }
              return (
                <div
                  key={project.id}
                  className={`grid lg:grid-cols-2 gap-8 sm:gap-12 items-center ${
                    index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                  }`}
                >
                  {/* Project image beside project info */}
                  <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''} order-2 lg:order-none flex justify-center`}>
                    {projectImage && (
                      <img
                        src={projectImage}
                        alt={project.title + ' screenshot'}
                        className="rounded-xl shadow-lg w-[420px] h-[260px] object-cover"
                        loading="lazy"
                      />
                    )}
                  </div>
                  <div className={`space-y-4 sm:space-y-6 ${index % 2 === 1 ? 'lg:col-start-1' : ''} order-1 lg:order-none`}>
                    <span className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white opacity-20">
                      {project.id}
                    </span>
                    <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white dark:text-foreground">
                      {project.title}
                    </h3>
                    <p className="text-gray-300 dark:text-foreground/80 leading-relaxed text-sm sm:text-base lg:text-lg">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 sm:gap-3">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-2 sm:px-3 py-1 bg-gray-800 text-white dark:text-foreground text-xs sm:text-sm rounded-full border border-gray-700"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                      <Button
                        variant="outline"
                        className="border-white text-black dark:text-foreground bg-white dark:bg-transparent hover:bg-gray-100 dark:hover:bg-gray-200 hover:text-black dark:hover:text-black text-sm sm:text-base px-4 sm:px-6 py-2 sm:py-3 transition-all duration-300 hover:scale-105 hover:shadow-xl"
                        asChild
                      >
                        <a
                          href={project.liveUrl || project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center"
                        >
                          <ArrowRight className="w-4 h-4 mr-2" />
                          View Project
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      


      {/* Achievements & Certifications Section */}
      <section className="bg-gray-50 dark:bg-gray-800 py-12 sm:py-16 lg:py-20 text-foreground dark:text-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-8 sm:mb-12">
            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 mb-4 sm:mb-6">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground dark:text-foreground">Achievements & Certifications</h2>
            </div>
            <p className="text-base sm:text-lg text-foreground/70 dark:text-foreground/70 max-w-2xl mx-auto">A showcase of my most meaningful awards, certifications, and recognitions.</p>
          </div>
          <div className="flex justify-center">
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-5xl w-full mx-auto">
            {siteConfig.testimonials.map((item) => (
              <Card
                key={item.id}
                className="bg-white dark:bg-gray-900 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-cyan-200 dark:border-cyan-700/40"
              >
                <CardContent className="p-6 sm:p-8 flex flex-col items-center text-center">
                  <div className="mb-4 sm:mb-6 flex items-center justify-center">
                    {item.role.toLowerCase().includes('award') || item.role.toLowerCase().includes('winner') ? (
                      <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-cyan-100 text-cyan-600 text-3xl mr-2">
                        🏆
                      </span>
                    ) : (
                      <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-cyan-100 text-cyan-600 text-3xl mr-2">
                        🎓
                      </span>
                    )}
                  </div>
                  <h4 className="font-bold text-lg sm:text-xl mb-2 text-cyan-700 dark:text-cyan-400 tracking-wide">{item.name}</h4>
                  <p className="text-foreground/80 dark:text-foreground/80 mb-4 sm:mb-6 text-sm sm:text-base">{item.text}</p>
                  <span className="inline-block px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-cyan-700 dark:text-cyan-400 text-xs font-semibold mt-auto">{item.role}</span>
                </CardContent>
              </Card>
            ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};