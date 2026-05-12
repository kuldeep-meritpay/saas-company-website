import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { SECTION_IDS } from "../../lib/constants";

interface TechBadge {
  name: string;
  icon: React.ReactNode;
  color: string;
  description: string;
}

interface TechCategory {
  label: string;
  techs: TechBadge[];
}

// --- SVG Icon Components ---

const Html5Icon = ({ color }: { color: string }) => (
  <svg aria-hidden="true" viewBox="0 0 24 24" fill={color} className="w-7 h-7">
    <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z" />
  </svg>
);

const Css3Icon = ({ color }: { color: string }) => (
  <svg aria-hidden="true" viewBox="0 0 24 24" fill={color} className="w-7 h-7">
    <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm17.09 4.413L5.41 4.41l.213 2.622 10.125.002-.255 2.716h-6.64l.24 2.573h6.182l-.366 3.523-2.91.804-2.956-.81-.188-2.11h-2.61l.29 3.855L12 19.288l5.373-1.53L18.59 4.414z" />
  </svg>
);

const JavaScriptIcon = ({ color }: { color: string }) => (
  <svg aria-hidden="true" viewBox="0 0 24 24" fill={color} className="w-7 h-7">
    <path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z" />
  </svg>
);

const SymfonyIcon = ({ color }: { color: string }) => (
  <svg aria-hidden="true" viewBox="0 0 24 24" fill={color} className="w-7 h-7">
    <path d="M12 0C5.372 0 0 5.373 0 12s5.372 12 12 12c6.627 0 12-5.373 12-12S18.627 0 12 0zm1.553 5.255c.532-.01 1.033.109 1.398.29-.304.317-.484.7-.512 1.072-.04.53.154.85.698 1.458.47.523.703 1.076.662 1.768-.057.978-.62 1.652-1.735 2.206-.427.21-.898.35-1.48.435l-.22.029c-.22.028-.394.05-.553.082-.594.12-.97.352-1.102.69l-.012.04c-.13.498.28.85 1.182 1.025l.47.08c1.077.168 1.77.38 2.27.705.73.474 1.06 1.174.966 2.07-.12 1.144-.914 2.09-2.178 2.665-.78.353-1.696.526-2.672.509-1.063-.02-1.956-.263-2.553-.705-.525-.388-.78-.882-.74-1.457.08-1.083 1.082-1.908 2.354-1.908.518 0 .966.13 1.333.39.303.21.49.48.545.786l.013.085-.083-.007c-.26-.022-.5.003-.712.076-.425.146-.68.467-.708.88-.02.282.076.52.277.688.27.225.697.35 1.212.36.656.012 1.2-.137 1.617-.44.382-.278.607-.67.648-1.107.06-.647-.336-1.07-1.286-1.3l-.508-.116c-.832-.18-1.43-.4-1.87-.685-.65-.42-.932-1.01-.787-1.695.1-.47.38-.876.823-1.193.318-.227.693-.38 1.173-.48l.264-.047.228-.036c.225-.038.414-.073.584-.115.58-.147.94-.4 1.02-.73.057-.238-.032-.454-.258-.64-.286-.235-.753-.365-1.325-.365-.56 0-1.04.127-1.346.357-.24.18-.36.393-.35.618l.003.08-.078-.02c-.37-.094-.754-.105-1.13-.032l-.1.023.003-.09c.05-1.487 1.454-2.486 3.595-2.525l.214-.001z" />
  </svg>
);

const BigCommerceIcon = ({ color }: { color: string }) => (
  <svg aria-hidden="true" viewBox="0 0 24 24" fill={color} className="w-7 h-7">
    <path d="M0 0v24h24V0H0zm14.14 16.41c-.57.57-1.37.86-2.39.86H7.04V6.75h4.5c.94 0 1.7.27 2.27.8.57.53.86 1.22.86 2.05 0 .57-.14 1.07-.42 1.5-.28.42-.66.72-1.14.9.57.16 1.02.47 1.35.93.33.46.5 1 .5 1.62 0 1.02-.28 1.79-.86 2.36zM9.96 8.96v2.15h1.36c.39 0 .7-.1.92-.31.22-.2.33-.48.33-.83 0-.34-.11-.61-.32-.8-.21-.2-.51-.3-.9-.3H9.96zm2.48 5.26c-.23-.22-.55-.33-.96-.33H9.96v2.37h1.52c.43 0 .76-.11.99-.33.23-.22.35-.52.35-.89 0-.38-.12-.68-.38-.82z" />
  </svg>
);

const WixIcon = ({ color }: { color: string }) => (
  <svg aria-hidden="true" viewBox="0 0 24 24" fill={color} className="w-7 h-7">
    <path d="M21.12 7.2h-3.84L15.36 12l-1.92-4.8H12l2.88 7.2-1.92 2.4h1.92l1.44-1.8 1.44 1.8h1.92l-1.92-2.4 2.88-7.2zm-9.12 0H9.6L8.16 11.76 6.72 7.2H4.8l2.4 6-2.4 5.4h2.4l1.68-3.6 1.68 3.6H12.6l-2.4-5.4 2.4-6zm-9.12 0H0v9.6h2.88V7.2z" />
  </svg>
);

const RedisIcon = ({ color }: { color: string }) => (
  <svg aria-hidden="true" viewBox="0 0 24 24" fill={color} className="w-7 h-7">
    <path d="M10.585 4.59l2.985 1.184 2.985-1.186-2.985-1.184zm6.733 2.675l-3.747 1.49-3.748-1.488-3.748 1.486 3.748 1.487zm-14.84 2.67c-.47.19-.478.49-.018.674l3.36 1.35c.46.184 1.218.207 1.686.05l9.55-3.324c.467-.162.479-.435.025-.61L13.75 6.68c-.453-.174-1.198-.19-1.661-.035zm-.007 3.24c-.47.19-.476.49-.016.674l3.36 1.35c.46.184 1.218.207 1.687.05l9.55-3.323c.466-.163.478-.436.024-.61l-3.335-1.386c-.453-.174-1.198-.19-1.66-.035zm-.008 3.24c-.47.19-.476.49-.016.674l3.36 1.35c.46.184 1.218.207 1.687.05l9.55-3.323c.466-.163.478-.436.024-.61l-3.335-1.386c-.453-.174-1.198-.19-1.66-.035zm0 3.24c-.47.19-.476.49-.016.674l3.36 1.35c.46.184 1.218.207 1.687.05l9.55-3.323c.466-.163.478-.436.024-.61l-3.335-1.386c-.453-.174-1.198-.19-1.66-.035z" />
  </svg>
);

const MySQLIcon = ({ color }: { color: string }) => (
  <svg aria-hidden="true" viewBox="0 0 24 24" fill={color} className="w-7 h-7">
    <path d="M12 3C7.373 3 3.555 5.865 2.099 9.868c.17-.029.339-.054.51-.074C3.877 7.1 7.659 5.25 12 5.25c2.977 0 5.676 1.023 7.789 2.716l-1.633 1.633A8.225 8.225 0 0012 7.5a8.25 8.25 0 100 16.5c4.556 0 8.25-3.694 8.25-8.25 0-.45-.037-.892-.107-1.322l1.938-1.938C22.667 13.432 23 14.682 23 16c0 6.075-4.925 11-11 11S1 22.075 1 16 5.925 5 12 5c2.33 0 4.492.724 6.27 1.956L16.732 8.49A9.714 9.714 0 0012 7.5 9.75 9.75 0 0012 27a9.75 9.75 0 000-19.5zm8.667 1.56l-6.64 6.64a1.5 1.5 0 01-2.122-2.122l6.64-6.64a1.5 1.5 0 012.122 2.122z" />
  </svg>
);

const PostgreSQLIcon = ({ color }: { color: string }) => (
  <svg aria-hidden="true" viewBox="0 0 24 24" fill={color} className="w-7 h-7">
    <path d="M23.5 12c0 6.351-5.149 11.5-11.5 11.5S.5 18.351.5 12 5.649.5 12 .5 23.5 5.649 23.5 12zM12 2.5C6.753 2.5 2.5 6.753 2.5 12S6.753 21.5 12 21.5 21.5 17.247 21.5 12 17.247 2.5 12 2.5zm0 4c.276 0 .5.224.5.5v2.5h2.5a.5.5 0 010 1H12.5v2.5a.5.5 0 01-1 0v-2.5H9a.5.5 0 010-1h2.5V7a.5.5 0 01.5-.5zm3.5 7.5a.5.5 0 010 1H8.5a.5.5 0 010-1H15.5zm-1 2.5a.5.5 0 010 1H9.5a.5.5 0 010-1H14.5z" />
  </svg>
);

const MongoDBIcon = ({ color }: { color: string }) => (
  <svg aria-hidden="true" viewBox="0 0 24 24" fill={color} className="w-7 h-7">
    <path d="M17.193 9.555c-1.264-5.58-4.252-7.414-4.573-8.115-.28-.394-.53-.954-.735-1.44-.036.495-.055.685-.523 1.184-.723.566-4.438 3.682-4.74 10.02-.282 5.912 4.27 9.435 4.888 9.884l.07.05A73.49 73.49 0 0111.91 24h.481c.114-1.032.284-2.056.51-3.07.417-.296.604-.463.85-.693a11.342 11.342 0 003.639-8.464c.01-.814-.022-1.63-.197-2.218zm-5.336 8.195s0-8.291.275-8.29c.213 0 .49 10.695.49 10.695-.381-.045-.765-1.76-.765-2.405z" />
  </svg>
);

const NodeJsIcon = ({ color }: { color: string }) => (
  <svg aria-hidden="true" viewBox="0 0 24 24" fill={color} className="w-7 h-7">
    <path d="M11.998 24c-.321 0-.641-.084-.922-.247l-2.936-1.737c-.438-.245-.224-.332-.08-.383.585-.203.703-.25 1.328-.604.065-.037.151-.023.218.017l2.256 1.339c.082.045.197.045.272 0l8.795-5.076c.082-.047.134-.141.134-.238V6.921c0-.099-.053-.192-.137-.242l-8.791-5.072c-.081-.047-.189-.047-.271 0L3.075 6.68C2.99 6.729 2.936 6.825 2.936 6.921v10.15c0 .097.054.189.139.235l2.409 1.392c1.307.654 2.108-.116 2.108-.89V7.787c0-.142.114-.253.256-.253h1.115c.139 0 .255.112.255.253v10.021c0 1.745-.95 2.745-2.604 2.745-.508 0-.909 0-2.026-.551L2.28 18.675a1.86 1.86 0 0 1-.922-1.604V6.921c0-.659.353-1.275.922-1.603l8.795-5.082c.557-.315 1.296-.315 1.848 0l8.794 5.082c.57.329.924.944.924 1.603v10.15c0 .659-.354 1.275-.924 1.604l-8.794 5.078C12.643 23.916 12.324 24 11.998 24z" />
  </svg>
);

const JavaIcon = ({ color }: { color: string }) => (
  <svg aria-hidden="true" viewBox="0 0 24 24" fill={color} className="w-7 h-7">
    <path d="M8.851 18.56s-.917.534.653.714c1.902.218 2.874.187 4.969-.211 0 0 .552.346 1.321.646-4.699 2.013-10.633-.118-6.943-1.149M8.276 15.933s-1.028.761.542.924c2.032.209 3.636.227 6.413-.308 0 0 .384.389.987.602-5.679 1.661-12.007.13-7.942-1.218M13.116 11.475c1.158 1.333-.304 2.533-.304 2.533s2.939-1.518 1.589-3.418c-1.261-1.772-2.228-2.652 3.007-5.688 0-.001-8.216 2.051-4.292 6.573M19.33 20.504s.679.559-.747.991c-2.712.822-11.288 1.069-13.669.033-.856-.373.75-.89 1.254-.998.527-.113.828-.092.828-.092-.953-.671-6.156 1.317-2.643 1.887 9.58 1.553 17.462-.7 14.977-1.821M9.292 13.21s-4.362 1.036-1.544 1.412c1.189.159 3.561.123 5.77-.062 1.806-.152 3.618-.477 3.618-.477s-.637.272-1.098.587c-4.429 1.165-12.986.623-10.522-.568 2.082-1.006 3.776-.892 3.776-.892M17.116 17.584c4.503-2.34 2.421-4.589.968-4.285-.355.074-.515.138-.515.138s.132-.207.385-.297c2.875-1.011 5.086 2.981-.928 4.562 0-.001.07-.062.09-.118M14.401 0s2.494 2.494-2.365 6.33c-3.896 3.077-.888 4.832-.001 6.836-2.274-2.053-3.943-3.858-2.824-5.539 1.644-2.469 6.197-3.665 5.19-7.627M9.734 23.924c4.322.277 10.959-.153 11.116-2.198 0 0-.302.775-3.572 1.391-3.688.694-8.239.613-10.937.168 0-.001.553.457 3.393.639" />
  </svg>
);

const SpringBootIcon = ({ color }: { color: string }) => (
  <svg aria-hidden="true" viewBox="0 0 24 24" fill={color} className="w-7 h-7">
    <path d="M20.205 16.392c-2.469 3.289-7.741 4.28-11.093 1.609C5.971 15.459 5.767 11.23 7.394 8.401c1.77-3.136 5.573-4.963 9.09-3.758.902.35 1.682 1.02 2.325 1.925.217.31.682 1.041.682 1.041-.395.313-.912.881-1.542.881-.362.006-.64-.137-.994-.408 0 0-.313-.266-.54-.399-2.178-1.301-5.35-.572-7.034 1.479-.964 1.198-1.425 2.706-1.371 4.186.063 1.707.806 3.397 2.139 4.474 1.985 1.6 4.955 1.426 7.006-.011.666-.467 1.269-1.099 1.574-1.883L20.205 16.392zm-5.257.088c-.456 1.053-1.545 1.766-2.691 1.766-2.162.001-3.659-1.928-3.247-4.038.187-.951.726-1.849 1.536-2.424 1.659-1.165 4.055-.41 4.749 1.494.183.505.232 1.042.138 1.569-.04.228-.102.447-.181.647l-2.51-2.51c-.375-.376-.979-.468-1.459-.225-.28.144-.499.388-.621.686a1.576 1.576 0 0 0 .325 1.683l2.52 2.521c.097.097.2.186.309.264l.132.567z" />
  </svg>
);

const PhpIcon = ({ color }: { color: string }) => (
  <svg aria-hidden="true" viewBox="0 0 24 24" fill={color} className="w-7 h-7">
    <path d="M7.01 10.207h-.944l-.515 2.648h.838c.556 0 .97-.105 1.242-.314.272-.21.455-.559.55-1.049.092-.47.05-.802-.124-.995-.175-.193-.523-.29-1.047-.29zM12 5.688C5.373 5.688 0 8.514 0 12s5.373 6.313 12 6.313S24 15.486 24 12c0-3.486-5.373-6.312-12-6.312zm-3.26 7.451c-.261.25-.575.438-.917.551-.336.108-.765.164-1.285.164H5.357l-.327 1.681H3.652l1.23-6.326h2.65c.797 0 1.378.209 1.744.628.366.418.476 1.002.33 1.752a2.836 2.836 0 0 1-.305.847 2.54 2.54 0 0 1-.561.703zm4.024.715l.543-2.799c.063-.318.039-.536-.073-.651-.112-.116-.336-.174-.674-.174H11.46l-.705 3.624H9.371l1.23-6.326h1.385l-.327 1.682h1.218c.767 0 1.295.134 1.585.401s.387.615.293 1.05l-.572 2.993h-1.399zm7.443-3.627h-1.371l-.905 4.627H16.54l.905-4.627h-1.356l.231-1.699h4.102l-.215 1.699z" />
  </svg>
);

const LaravelIcon = ({ color }: { color: string }) => (
  <svg aria-hidden="true" viewBox="0 0 24 24" fill={color} className="w-7 h-7">
    <path d="M23.642 5.43a.364.364 0 0 1 .014.1v5.149c0 .135-.073.26-.189.326l-4.323 2.49v4.934a.378.378 0 0 1-.188.326L9.93 23.949a.316.316 0 0 1-.066.027c-.008.002-.016.008-.024.01a.348.348 0 0 1-.192 0c-.011-.002-.02-.008-.03-.012-.02-.008-.042-.014-.062-.025L.533 18.755a.376.376 0 0 1-.189-.326V2.974c0-.033.005-.066.014-.098.003-.012.01-.02.014-.032a.369.369 0 0 1 .023-.058c.004-.013.015-.022.023-.033l.033-.045c.012-.01.025-.018.037-.027.014-.012.027-.024.04-.032h.002L5.058.642a.376.376 0 0 1 .376 0L9.81 3.135h.002c.015.01.027.021.04.033l.038.027c.013.014.021.03.033.045.008.011.019.02.024.033.01.02.017.038.024.058.003.012.011.021.013.033.01.032.015.064.015.097v9.652l3.76-2.164V5.527c0-.033.004-.066.013-.098.003-.012.01-.02.013-.032a.487.487 0 0 1 .024-.059c.007-.012.018-.02.025-.033.011-.015.021-.03.033-.043.012-.012.025-.02.037-.028.014-.01.026-.023.041-.032h.001l4.378-2.493a.375.375 0 0 1 .375 0l4.376 2.493c.015.01.027.022.041.032.012.01.025.017.036.028.013.014.022.028.034.043.008.012.018.021.024.033.01.02.017.038.024.059.005.012.01.02.014.032zm-.74 5.032V6.179l-1.578.908-2.182 1.256v4.283zm-4.7 8.098V14.28l-2.146 1.225-6.127 3.498v4.325zM.742 3.994v14.434l8.106 4.648v-4.325l-4.363-2.473-.002-.003-.002-.002c-.014-.01-.025-.021-.04-.031-.011-.01-.024-.018-.035-.027l-.002-.003c-.011-.014-.018-.03-.03-.043-.007-.009-.016-.018-.022-.027v-.004c-.008-.014-.013-.031-.02-.047-.006-.013-.012-.024-.015-.038v-.002c-.004-.018-.006-.035-.008-.052-.002-.016-.006-.028-.006-.045V4.901zm4.692-2.73L1.808 3.408l3.626 2.07 3.625-2.07zm2.084 13.248l2.182-1.256 1.576-.907-3.758-2.163zm10.046-6.352l-3.625 2.07 3.625 2.07 3.625-2.07zm-3.998 6.51l2.18-1.256V9.902l-2.18 1.257zm-9.298-3.774l-2.182-1.256-1.578-.908v4.282l3.76 2.164v-4.282z" />
  </svg>
);

const PayPalIcon = ({ color }: { color: string }) => (
  <svg aria-hidden="true" viewBox="0 0 24 24" fill={color} className="w-7 h-7">
    <path d="M7.076 21.337H2.47a.641.641 0 0 1-.633-.74L4.944.901C5.026.382 5.474 0 5.998 0h7.46c2.57 0 4.578.543 5.69 1.81 1.01 1.15 1.304 2.42 1.012 4.287-.023.143-.047.288-.077.437-.983 5.05-4.349 6.797-8.647 6.797h-2.19c-.524 0-.968.382-1.05.9l-1.12 7.106zm14.146-14.42a3.35 3.35 0 0 0-.607-.541c-.013.076-.026.175-.041.254-.93 4.778-4.005 7.201-9.138 7.201h-2.19a.563.563 0 0 0-.556.479l-1.187 7.527h-.506l-.24 1.516a.56.56 0 0 0 .554.647h3.882c.46 0 .85-.334.922-.788.06-.26.76-4.852.816-5.09a.932.932 0 0 1 .923-.788h.58c3.76 0 6.705-1.528 7.565-5.946.36-1.847.174-3.388-.777-4.471z" />
  </svg>
);

const RazorpayIcon = ({ color }: { color: string }) => (
  <svg aria-hidden="true" viewBox="0 0 24 24" fill={color} className="w-7 h-7">
    <path d="M23.994 0L14.12 9.375l-2.077-3.9L.006 24h9.217L23.994 0zm-8.91 17.244H6.868l6.11-9.797 1.58 2.963-3.17 5.088h3.696v1.746z" />
  </svg>
);

const PaytmIcon = ({ color }: { color: string }) => (
  <svg aria-hidden="true" viewBox="0 0 24 24" fill={color} className="w-7 h-7">
    <path d="M4.5 0A4.5 4.5 0 0 0 0 4.5v15A4.5 4.5 0 0 0 4.5 24h15a4.5 4.5 0 0 0 4.5-4.5v-15A4.5 4.5 0 0 0 19.5 0zm1.2 5.4h4.2v2.85H8.55V18.6H5.7V8.25zm7.65 0h2.85V18.6h-2.85z" />
  </svg>
);

const PhonePeIcon = ({ color }: { color: string }) => (
  <svg aria-hidden="true" viewBox="0 0 24 24" fill={color} className="w-7 h-7">
    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 7.03l-1.54 8.843c-.116.666-.525.832-.946.517l-3.145-2.316-1.517 1.46c-.168.168-.308.308-.631.308l.225-3.195 5.8-5.237c.252-.225-.055-.35-.39-.125L5.807 12.69l-3.11-.972c-.677-.21-.69-.677.14-.999L16.91 5.79c.563-.204 1.056.138.652 1.24z" />
  </svg>
);

const ElasticsearchIcon = ({ color }: { color: string }) => (
  <svg aria-hidden="true" viewBox="0 0 24 24" fill={color} className="w-7 h-7">
    <path d="M13.394 0C9.36 0 5.77 2.049 3.67 5.175h12.736a4.888 4.888 0 0 1 4.427 2.787l1.633-1.999A11.964 11.964 0 0 0 13.394 0zM2.595 7.181A11.99 11.99 0 0 0 1.5 12c0 1.67.341 3.261.952 4.706L14.29 8.287a2.958 2.958 0 0 0-2.71-1.745H3.574a2.96 2.96 0 0 0-.979.639zm-.96 7.58l1.633 1.998a4.888 4.888 0 0 1 4.427-2.787h7.27A2.958 2.958 0 0 0 17.59 12a2.96 2.96 0 0 0-.534-1.712zm1.64 3.999A11.964 11.964 0 0 0 13.394 24c4.034 0 7.623-2.049 9.724-5.175H10.383a4.888 4.888 0 0 1-4.427-2.787z" />
  </svg>
);

const TypesenseIcon = ({ color }: { color: string }) => (
  <svg aria-hidden="true" viewBox="0 0 24 24" fill={color} className="w-7 h-7">
    <path d="M12 2a10 10 0 1 0 0 20A10 10 0 0 0 12 2zm0 2a8 8 0 1 1 0 16A8 8 0 0 1 12 4zm-1 3v2H7v2h4v2l3-3-3-3zm2 8v-2h4v-2h-4v-2l-3 3 3 3z" />
  </svg>
);

const KafkaIcon = ({ color }: { color: string }) => (
  <svg aria-hidden="true" viewBox="0 0 24 24" fill={color} className="w-7 h-7">
    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 4.8a1.92 1.92 0 1 1 0 3.84A1.92 1.92 0 0 1 12 4.8zM6.48 9.12a1.92 1.92 0 1 1 0 3.84 1.92 1.92 0 0 1 0-3.84zm11.04 0a1.92 1.92 0 1 1 0 3.84 1.92 1.92 0 0 1 0-3.84zM12 15.36a1.92 1.92 0 1 1 0 3.84 1.92 1.92 0 0 1 0-3.84zm.96-4.32l2.88 1.44v.48l-2.88 1.44v-3.36zm-1.92 0v3.36L8.16 12.96v-.48z" />
  </svg>
);

const RabbitMQIcon = ({ color }: { color: string }) => (
  <svg aria-hidden="true" viewBox="0 0 24 24" fill={color} className="w-7 h-7">
    <path d="M23.035 9.601h-7.677a.956.956 0 0 1-.962-.962V.962A.956.956 0 0 0 13.434 0H10.56a.956.956 0 0 0-.962.962v7.677a.956.956 0 0 1-.962.962H5.765a.956.956 0 0 1-.962-.962V.962A.956.956 0 0 0 3.841 0H.967A.956.956 0 0 0 .005.962v22.076C.005 23.57.435 24 .967 24h22.068c.532 0 .962-.43.962-.962V10.563a.956.956 0 0 0-.962-.962zm-4.948 8.048a1.444 1.444 0 1 1-2.888 0 1.444 1.444 0 0 1 2.888 0z" />
  </svg>
);

const KubernetesIcon = ({ color }: { color: string }) => (
  <svg aria-hidden="true" viewBox="0 0 24 24" fill={color} className="w-7 h-7">
    <path d="M10.204 14.35l.007.01-.999 2.413a5.171 5.171 0 0 1-2.075-2.597l2.578-.437.004.005a.44.44 0 0 1 .484.606zm-.833-2.129a.44.44 0 0 0 .173-.756l.002-.011L7.585 9.7a5.143 5.143 0 0 0-.73 3.255l2.516-.734zm1.145-1.98a.44.44 0 0 0 .699-.337l.01-.005.15-2.62a5.144 5.144 0 0 0-3.01 1.442l2.15 1.523.001-.003zm1.76 4.83a.44.44 0 0 0 .54-.689l.003-.009-1.84-1.994-.003.007a.44.44 0 0 0-.693.073l.002.011-1.166 2.275a5.177 5.177 0 0 0 3.157.326zm4.164-1.932a5.19 5.19 0 0 0-.724-3.22l-1.947 1.772.005.007a.44.44 0 0 0 .16.756l-.001.01 2.507.675zm-1.956-4.275a5.156 5.156 0 0 0-3.003-1.453l.146 2.617.014.004a.44.44 0 0 0 .698.341l-.001-.003 2.146-1.506zm.976 6.17a.44.44 0 0 0-.495-.605l-.007-.013-2.58.44-.002.016a.44.44 0 0 0-.16.634l.006.01 1.8 1.96a5.167 5.167 0 0 0 1.438-2.442zM12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 19.467a7.467 7.467 0 1 1 0-14.934 7.467 7.467 0 0 1 0 14.934z" />
  </svg>
);

const JenkinsIcon = ({ color }: { color: string }) => (
  <svg aria-hidden="true" viewBox="0 0 24 24" fill={color} className="w-7 h-7">
    <path d="M7.687 14.05c-.23.02-.464.031-.7.031-1.026 0-2.012-.17-2.93-.479.17 1.28.626 2.489 1.35 3.538l.034.048.063-.015c.97-.24 2.003.019 2.755.695.38.343.648.787.772 1.278 1.032.42 2.13.641 3.254.642h.04c1.137 0 2.247-.225 3.288-.654.13-.497.405-.952.793-1.3.754-.676 1.79-.935 2.762-.694l.06.015.034-.048c.725-1.05 1.182-2.26 1.35-3.538a8.39 8.39 0 0 1-2.93.479 8.55 8.55 0 0 1-.698-.031l-.036.063c-.44.765-1.245 1.26-2.125 1.31-.042.003-.085.004-.128.004-.83 0-1.607-.404-2.078-1.08l-.059-.087a2.276 2.276 0 0 1-.34-1.37 2.285 2.285 0 0 1 1.27-1.896l.091-.048a2.25 2.25 0 0 1 2.448.26l.007.005.015-.006a7.993 7.993 0 0 0 2.258-1.613l-.006-.009a2.28 2.28 0 0 1-.44-1.364c0-.525.176-1.024.5-1.43l.02-.025-.008-.02A8.457 8.457 0 0 0 12 4.887a8.454 8.454 0 0 0-5.874 2.37l-.01.02.022.026c.322.405.498.903.498 1.427 0 .497-.165.977-.466 1.364l-.007.009a8.012 8.012 0 0 0 2.254 1.61l.016.007.007-.005a2.251 2.251 0 0 1 2.45-.26l.09.047a2.286 2.286 0 0 1 1.268 1.895c.034.49-.09.975-.348 1.393l-.059.086c-.47.673-1.247 1.075-2.078 1.074-.042 0-.085-.001-.127-.004-.882-.05-1.687-.546-2.126-1.31zm4.312-10.803C5.41 3.247.23 8.083.005 14.176v.021c0 .25.01.5.029.749a9.63 9.63 0 0 0 1.14 3.987 9.59 9.59 0 0 0 2.813 3.143 9.562 9.562 0 0 0 3.807 1.638A9.633 9.633 0 0 0 12 23.88a9.633 9.633 0 0 0 4.206-.166 9.562 9.562 0 0 0 3.807-1.638 9.59 9.59 0 0 0 2.813-3.143 9.63 9.63 0 0 0 1.14-3.987c.019-.249.029-.499.029-.749v-.021C23.77 8.083 18.59 3.247 12 3.247z" />
  </svg>
);

const ArgoCDIcon = ({ color }: { color: string }) => (
  <svg aria-hidden="true" viewBox="0 0 24 24" fill={color} className="w-7 h-7">
    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 3.6a8.4 8.4 0 1 1 0 16.8A8.4 8.4 0 0 1 12 3.6zm0 2.4a6 6 0 1 0 0 12A6 6 0 0 0 12 6zm0 1.5c.828 0 1.5.672 1.5 1.5v3.879l2.56 2.561a1.5 1.5 0 0 1-2.12 2.12L11.44 15.06A1.5 1.5 0 0 1 11 14V9c0-.828.672-1.5 1.5-1.5z" />
  </svg>
);

const GCPIcon = ({ color }: { color: string }) => (
  <svg aria-hidden="true" viewBox="0 0 24 24" fill={color} className="w-7 h-7">
    <path d="M12.19 2.38a9.344 9.344 0 0 0-9.234 6.893c.053-.02-.055.013 0 0-3.875 2.551-3.922 8.11-.247 10.941l.006-.007-.007.03a6.717 6.717 0 0 0 4.077 1.356h5.173l.03.03h5.192c6.687.017 9.304-8.803 3.959-12.388A9.349 9.349 0 0 0 12.19 2.38zm-3.43 12.645H6.645v-1.437h2.115zm0-2.754H6.645v-1.437h2.115zm0-2.754H6.645V8.08h2.115zm5.63 5.508h-4.2v-1.437h4.2zm0-2.754h-4.2v-1.437h4.2zm0-2.754h-4.2V8.08h4.2z" />
  </svg>
);

const ELKIcon = ({ color }: { color: string }) => (
  <svg aria-hidden="true" viewBox="0 0 24 24" fill={color} className="w-7 h-7">
    <path d="M13.394 0C9.36 0 5.77 2.049 3.67 5.175h12.736a4.888 4.888 0 0 1 4.427 2.787l1.633-1.999A11.964 11.964 0 0 0 13.394 0zM2.595 7.181A11.99 11.99 0 0 0 1.5 12c0 1.67.341 3.261.952 4.706L14.29 8.287a2.958 2.958 0 0 0-2.71-1.745H3.574a2.96 2.96 0 0 0-.979.639zm-.96 7.58l1.633 1.998a4.888 4.888 0 0 1 4.427-2.787h7.27A2.958 2.958 0 0 0 17.59 12a2.96 2.96 0 0 0-.534-1.712zm1.64 3.999A11.964 11.964 0 0 0 13.394 24c4.034 0 7.623-2.049 9.724-5.175H10.383a4.888 4.888 0 0 1-4.427-2.787z" />
  </svg>
);

const SigNozIcon = ({ color }: { color: string }) => (
  <svg aria-hidden="true" viewBox="0 0 24 24" fill={color} className="w-7 h-7">
    <path d="M3 3h18v2H3zm0 4h12v2H3zm0 4h18v2H3zm0 4h8v2H3zm0 4h14v2H3z" />
  </svg>
);

const ReactIcon2 = ({ color }: { color: string }) => (
  <svg aria-hidden="true" viewBox="0 0 24 24" fill={color} className="w-7 h-7">
    <circle cx="12" cy="12" r="2.236" />
    <ellipse
      cx="12"
      cy="12"
      rx="11"
      ry="4.2"
      fill="none"
      stroke={color}
      strokeWidth="1.2"
    />
    <ellipse
      cx="12"
      cy="12"
      rx="11"
      ry="4.2"
      fill="none"
      stroke={color}
      strokeWidth="1.2"
      transform="rotate(60 12 12)"
    />
    <ellipse
      cx="12"
      cy="12"
      rx="11"
      ry="4.2"
      fill="none"
      stroke={color}
      strokeWidth="1.2"
      transform="rotate(120 12 12)"
    />
  </svg>
);

const TypeScriptIcon = ({ color }: { color: string }) => (
  <svg aria-hidden="true" viewBox="0 0 24 24" fill={color} className="w-7 h-7">
    <path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z" />
  </svg>
);

const TailwindIcon = ({ color }: { color: string }) => (
  <svg aria-hidden="true" viewBox="0 0 24 24" fill={color} className="w-7 h-7">
    <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z" />
  </svg>
);

const ShopifyIcon = ({ color }: { color: string }) => (
  <svg aria-hidden="true" viewBox="0 0 24 24" fill={color} className="w-7 h-7">
    <path d="M15.337 23.979l7.216-1.561s-2.604-17.613-2.625-17.73c-.018-.116-.114-.192-.211-.192-.098 0-1.81-.038-1.81-.038s-1.19-1.163-1.33-1.302v.006L15.337 23.98zM10.686 7.657s-.387-.116-.965-.212c-.578-.096-.963-.058-1.35.076s-.598.423-.655.635c-.058.212.039.424.23.615.192.191.597.424.965.597.367.173.77.424 1.12.75.348.327.636.827.636 1.424 0 .597-.192 1.194-.578 1.675-.386.48-.945.847-1.6 1.001-.655.154-1.388.135-2.004-.077-.616-.212-1.117-.56-1.445-.963-.327-.404-.424-.81-.424-1.174l1.407-.193c.075.231.289.44.502.578.211.137.5.193.827.137.327-.058.636-.193.847-.424.212-.231.328-.56.308-.86-.02-.3-.154-.578-.347-.77-.192-.193-.482-.366-.77-.52-.291-.154-.598-.308-.888-.52-.289-.211-.578-.52-.77-.884-.192-.365-.269-.809-.174-1.252.096-.443.366-.886.77-1.213.403-.327.904-.52 1.445-.558.54-.039 1.12.058 1.58.25l-.213.96z" />
  </svg>
);

const DockerIcon = ({ color }: { color: string }) => (
  <svg aria-hidden="true" viewBox="0 0 24 24" fill={color} className="w-7 h-7">
    <path d="M13.983 11.078h2.119a.186.186 0 0 0 .186-.185V9.006a.186.186 0 0 0-.186-.186h-2.119a.185.185 0 0 0-.185.185v1.888c0 .102.083.185.185.185m-2.954-5.43h2.118a.186.186 0 0 0 .186-.186V3.574a.186.186 0 0 0-.186-.185h-2.118a.185.185 0 0 0-.185.185v1.888c0 .102.082.185.185.185m0 2.716h2.118a.187.187 0 0 0 .186-.186V6.29a.186.186 0 0 0-.186-.185h-2.118a.185.185 0 0 0-.185.185v1.887c0 .102.082.185.185.186m-2.93 0h2.12a.186.186 0 0 0 .184-.186V6.29a.185.185 0 0 0-.185-.185H8.1a.185.185 0 0 0-.185.185v1.887c0 .102.083.185.185.186m-2.964 0h2.119a.186.186 0 0 0 .185-.186V6.29a.185.185 0 0 0-.185-.185H5.136a.186.186 0 0 0-.186.185v1.887c0 .102.084.185.186.186m5.893 2.715h2.118a.186.186 0 0 0 .186-.185V9.006a.186.186 0 0 0-.186-.186h-2.118a.185.185 0 0 0-.185.185v1.888c0 .102.082.185.185.185m-2.93 0h2.12a.185.185 0 0 0 .184-.185V9.006a.185.185 0 0 0-.184-.186h-2.12a.185.185 0 0 0-.185.185v1.888c0 .102.083.185.185.185m-2.964 0h2.119a.185.185 0 0 0 .185-.185V9.006a.185.185 0 0 0-.184-.186h-2.12a.186.186 0 0 0-.186.186v1.887c0 .102.084.185.186.185m-2.92 0h2.12a.186.186 0 0 0 .184-.185V9.006a.185.185 0 0 0-.184-.186h-2.12a.185.185 0 0 0-.185.185v1.888c0 .102.083.185.185.185M23.763 9.89c-.065-.051-.672-.51-1.954-.51-.338.001-.676.03-1.01.087-.248-1.7-1.653-2.53-1.716-2.566l-.344-.199-.226.327c-.284.438-.49.922-.612 1.43-.23.97-.09 1.882.403 2.661-.595.332-1.55.413-1.744.42H.751a.751.751 0 0 0-.75.748 11.376 11.376 0 0 0 .692 4.062c.545 1.428 1.355 2.48 2.41 3.124 1.18.723 3.1 1.137 5.275 1.137.983.003 1.963-.086 2.93-.266a12.248 12.248 0 0 0 3.823-1.389c.98-.567 1.86-1.288 2.61-2.136 1.252-1.418 1.998-2.997 2.553-4.4h.221c1.372 0 2.215-.549 2.68-1.009.309-.293.55-.65.707-1.046l.098-.288Z" />
  </svg>
);

// --- Category Data ---
const TECH_CATEGORIES: TechCategory[] = [
  {
    label: "Frontend",
    techs: [
      {
        name: "HTML5",
        icon: <Html5Icon color="#E34F26" />,
        color: "#E34F26",
        description: "Semantic markup and structure for the modern web",
      },
      {
        name: "CSS3",
        icon: <Css3Icon color="#1572B6" />,
        color: "#1572B6",
        description: "Styling, animations, and responsive layouts",
      },
      {
        name: "JavaScript",
        icon: <JavaScriptIcon color="#F7DF1E" />,
        color: "#F7DF1E",
        description: "Core language for interactive web experiences",
      },
      {
        name: "React",
        icon: <ReactIcon2 color="#61DAFB" />,
        color: "#61DAFB",
        description: "Component-based UI library for dynamic web apps",
      },
      {
        name: "TypeScript",
        icon: <TypeScriptIcon color="#3178C6" />,
        color: "#3178C6",
        description: "Type-safe JavaScript for scalable codebases",
      },
      {
        name: "Tailwind CSS",
        icon: <TailwindIcon color="#06B6D4" />,
        color: "#06B6D4",
        description: "Utility-first CSS framework for fast UI development",
      },
    ],
  },
  {
    label: "Backend",
    techs: [
      {
        name: "Node.js",
        icon: <NodeJsIcon color="#339933" />,
        color: "#339933",
        description: "High-performance server-side JavaScript runtime",
      },
      {
        name: "Java",
        icon: <JavaIcon color="#ED8B00" />,
        color: "#ED8B00",
        description: "Enterprise-grade backend services",
      },
      {
        name: "Spring Boot",
        icon: <SpringBootIcon color="#6DB33F" />,
        color: "#6DB33F",
        description: "Rapid Java microservice development",
      },
      {
        name: "PHP",
        icon: <PhpIcon color="#777BB4" />,
        color: "#777BB4",
        description: "Versatile server-side scripting language",
      },
      {
        name: "Laravel",
        icon: <LaravelIcon color="#FF2D20" />,
        color: "#FF2D20",
        description: "Elegant PHP framework for web artisans",
      },
      {
        name: "Symfony",
        icon: <SymfonyIcon color="#8B5CF6" />,
        color: "#8B5CF6",
        description:
          "High-performance PHP framework for complex enterprise apps",
      },
    ],
  },
  {
    label: "E-commerce",
    techs: [
      {
        name: "Shopify",
        icon: <ShopifyIcon color="#96BF48" />,
        color: "#96BF48",
        description: "Native app development for Shopify merchants",
      },
      {
        name: "BigCommerce",
        icon: <BigCommerceIcon color="#34313F" />,
        color: "#34313F",
        description: "Enterprise e-commerce platform integrations",
      },
      {
        name: "Wix",
        icon: <WixIcon color="#0C6EFC" />,
        color: "#0C6EFC",
        description: "Custom Wix app and extension development",
      },
    ],
  },
  {
    label: "Databases",
    techs: [
      {
        name: "PostgreSQL",
        icon: <PostgreSQLIcon color="#4169E1" />,
        color: "#4169E1",
        description: "Advanced open-source relational database",
      },
      {
        name: "MySQL",
        icon: <MySQLIcon color="#4479A1" />,
        color: "#4479A1",
        description: "Reliable relational database for web applications",
      },
      {
        name: "MongoDB",
        icon: <MongoDBIcon color="#47A248" />,
        color: "#47A248",
        description: "Flexible NoSQL document database for modern apps",
      },
      {
        name: "Redis",
        icon: <RedisIcon color="#DC382D" />,
        color: "#DC382D",
        description: "In-memory data store for caching and real-time ops",
      },
    ],
  },
  {
    label: "Payments",
    techs: [
      {
        name: "PayPal",
        icon: <PayPalIcon color="#003087" />,
        color: "#003087",
        description: "Global online payment processing",
      },
      {
        name: "Razorpay",
        icon: <RazorpayIcon color="#3395FF" />,
        color: "#3395FF",
        description: "Full-stack payments solution for India",
      },
      {
        name: "Paytm",
        icon: <PaytmIcon color="#002970" />,
        color: "#002970",
        description: "India's leading digital payments platform",
      },
      {
        name: "PhonePe",
        icon: <PhonePeIcon color="#5F259F" />,
        color: "#5F259F",
        description: "UPI-based payments integration",
      },
    ],
  },
  {
    label: "Search & Infra",
    techs: [
      {
        name: "Elasticsearch",
        icon: <ElasticsearchIcon color="#FEC514" />,
        color: "#FEC514",
        description: "Distributed search and analytics engine",
      },
      {
        name: "Typesense",
        icon: <TypesenseIcon color="#CC0000" />,
        color: "#CC0000",
        description: "Fast, typo-tolerant open-source search",
      },
    ],
  },
  {
    label: "Messaging",
    techs: [
      {
        name: "Kafka",
        icon: <KafkaIcon color="#9B4DCA" />,
        color: "#9B4DCA",
        description: "Distributed event streaming at scale",
      },
      {
        name: "RabbitMQ",
        icon: <RabbitMQIcon color="#FF6600" />,
        color: "#FF6600",
        description: "Reliable message broker for microservices",
      },
    ],
  },
  {
    label: "DevOps & Cloud",
    techs: [
      {
        name: "GCP",
        icon: <GCPIcon color="#4285F4" />,
        color: "#4285F4",
        description: "Google Cloud Platform for managed infrastructure",
      },
      {
        name: "Docker",
        icon: <DockerIcon color="#2496ED" />,
        color: "#2496ED",
        description: "Containerize and ship applications consistently",
      },
      {
        name: "Kubernetes",
        icon: <KubernetesIcon color="#326CE5" />,
        color: "#326CE5",
        description: "Container orchestration at scale",
      },
      {
        name: "Jenkins",
        icon: <JenkinsIcon color="#D24939" />,
        color: "#D24939",
        description: "CI/CD automation and pipeline orchestration",
      },
      {
        name: "ArgoCD",
        icon: <ArgoCDIcon color="#EF7B4D" />,
        color: "#EF7B4D",
        description: "GitOps continuous delivery for Kubernetes",
      },
    ],
  },
  {
    label: "Observability",
    techs: [
      {
        name: "ELK Stack",
        icon: <ELKIcon color="#FEC514" />,
        color: "#FEC514",
        description: "Log aggregation, search, and visualization",
      },
      {
        name: "SigNoz",
        icon: <SigNozIcon color="#5CC479" />,
        color: "#5CC479",
        description: "Open-source APM and distributed tracing",
      },
    ],
  },
];

function TechBadgeCard({ tech, index }: { tech: TechBadge; index: number }) {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div className="relative">
      <motion.button
        type="button"
        data-ocid={`tech-stack.item.${index + 1}`}
        initial={{ opacity: 0, scale: 0.85 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: (index % 12) * 0.04 }}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        onFocus={() => setShowTooltip(true)}
        onBlur={() => setShowTooltip(false)}
        aria-label={`${tech.name}: ${tech.description}`}
        className="group flex w-full flex-col items-center gap-2 p-3.5 rounded-xl border border-border/40 bg-card/50 hover:border-border/70 hover:bg-card/80 hover:shadow-sm transition-all duration-150 cursor-default backdrop-blur-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
      >
        <span
          className="w-10 h-10 flex items-center justify-center rounded-lg transition-all duration-150 group-hover:scale-105"
          style={{
            background: `oklch(from ${tech.color} l c h / 0.1)`,
            border: `1px solid ${tech.color}28`,
          }}
        >
          {tech.icon}
        </span>
        <span className="text-[12px] font-medium text-foreground/75 text-center leading-tight">
          {tech.name}
        </span>
      </motion.button>

      {/* Tooltip */}
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            data-ocid={`tech-stack.tooltip.${index + 1}`}
            initial={{ opacity: 0, y: 6, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 6, scale: 0.95 }}
            transition={{ duration: 0.15 }}
            className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 z-20 pointer-events-none"
          >
            <div className="glass-blur rounded-lg px-3 py-2 shadow-elevated border border-border/40 min-w-[140px] max-w-[200px]">
              <p className="text-xs font-bold text-foreground mb-0.5">
                {tech.name}
              </p>
              <p className="text-[11px] text-muted-foreground leading-tight">
                {tech.description}
              </p>
            </div>
            <div
              className="w-2 h-2 rotate-45 border-b border-r border-border/40 mx-auto -mt-1"
              style={{ background: "oklch(var(--card))" }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function TechStack() {
  let globalIndex = 0;

  return (
    <section
      id={SECTION_IDS.TECH_STACK}
      data-ocid="tech-stack.section"
      className="py-24 bg-background"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] font-semibold uppercase tracking-wider mb-4"
            style={{
              border: "1px solid oklch(0.74 0.22 290 / 0.25)",
              background: "oklch(0.74 0.22 290 / 0.07)",
              color: "oklch(0.74 0.22 290)",
            }}
          >
            Our Stack
          </span>
          <h2 className="font-display font-bold text-4xl sm:text-5xl text-foreground mb-4 tracking-[-0.02em]">
            Technologies We Work With
          </h2>
          <p className="text-base text-muted-foreground/80 max-w-2xl mx-auto">
            Modern, proven technologies that are fast, scalable, and
            developer-friendly — from frontend to infrastructure.
          </p>
        </motion.div>

        {/* Category Groups */}
        <div className="space-y-12">
          {TECH_CATEGORIES.map((category, catIdx) => (
            <motion.div
              key={category.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: catIdx * 0.05 }}
            >
              <div className="flex items-center gap-3 mb-5">
                <span
                  className="text-[10.5px] font-semibold uppercase tracking-widest px-2.5 py-0.5 rounded-full"
                  style={{
                    border: "1px solid oklch(0.74 0.22 290 / 0.2)",
                    background: "oklch(0.74 0.22 290 / 0.06)",
                    color: "oklch(0.74 0.22 290 / 0.85)",
                  }}
                >
                  {category.label}
                </span>
                <div className="flex-1 h-px bg-border/30" />
              </div>

              {/* Tech badges grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3">
                {category.techs.map((tech) => {
                  const idx = globalIndex++;
                  return (
                    <TechBadgeCard key={tech.name} tech={tech} index={idx} />
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
