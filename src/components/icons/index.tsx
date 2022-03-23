import { JSXElement } from 'solid-js';
import { styled } from 'solid-styled-components';
import { IconProps, RevIcon } from './icons';

export type { IconProps };

export type IconElement = (props: IconProps) => JSXElement;

const Icon = styled('span')`
	height: 20px;
	width: 20px;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const Plus = ({ fill = '#2c2738', onClick }: IconProps) => <Icon onClick={onClick} data-testid='plus-icon'><RevIcon.Plus fill={fill} /></Icon>;
const Cross = ({ fill = '#2c2738', onClick }: IconProps) => <Icon onClick={onClick} data-testid='cross-icon'><RevIcon.Cross fill={fill} /></Icon>;
const Minus = ({ fill = '#2c2738', onClick }: IconProps) => <Icon onClick={onClick} data-testid='minus-icon'><RevIcon.Minus fill={fill} /></Icon>;
const More = ({ fill = '#2c2738', onClick }: IconProps) => <Icon onClick={onClick} data-testid='more-icon'><RevIcon.More fill={fill} /></Icon>;
const Burger = ({ fill = '#2c2738', onClick }: IconProps) => <Icon onClick={onClick} data-testid='burger-icon'><RevIcon.Burger fill={fill} /></Icon>;
const Lens = ({ fill = '#2c2738', onClick }: IconProps) => <Icon onClick={onClick} data-testid='lens-icon'><RevIcon.Lens fill={fill} /></Icon>;
const Circle = ({ fill = '#2c2738', onClick }: IconProps) => <Icon onClick={onClick} data-testid='circle-icon'><RevIcon.Circle fill={fill} /></Icon>;
const ChevronLeft = ({ fill = '#2c2738', onClick }: IconProps) => <Icon onClick={onClick} data-testid='chevronLeft-icon'><RevIcon.ChevronLeft fill={fill} /></Icon>;
const ChevronDown = ({ fill = '#2c2738', onClick }: IconProps) => <Icon onClick={onClick} data-testid='chevronDown-icon'><RevIcon.ChevronDown fill={fill} /></Icon>;
const Share = ({ fill = '#2c2738', onClick }: IconProps) => <Icon onClick={onClick} data-testid='share-icon'><RevIcon.Share fill={fill} /></Icon>;
const Heart = ({ fill = '#2c2738', onClick }: IconProps) => <Icon onClick={onClick} data-testid='heart-icon'><RevIcon.Heart fill={fill} /></Icon>;
const Activity = ({ fill = '#2c2738', onClick }: IconProps) => <Icon onClick={onClick} data-testid='activity-icon'><RevIcon.Activity fill={fill} /></Icon>;
const Alert = ({ fill = '#2c2738', onClick }: IconProps) => <Icon onClick={onClick} data-testid='alert-icon'><RevIcon.Alert fill={fill} /></Icon>;
const ArrowDown = ({ fill = '#2c2738', onClick }: IconProps) => <Icon onClick={onClick} data-testid='arrow-down-icon'><RevIcon.ArrowDown fill={fill} /></Icon>;
const ArrowUp = ({ fill = '#2c2738', onClick }: IconProps) => <Icon onClick={onClick} data-testid='arrow-up-icon'><RevIcon.ArrowUp fill={fill} /></Icon>;
const ArrowLeft = ({ fill = '#2c2738', onClick }: IconProps) => <Icon onClick={onClick} data-testid='arrow-left-icon'><RevIcon.ArrowLeft fill={fill} /></Icon>;
const ArrowRight = ({ fill = '#2c2738', onClick }: IconProps) => <Icon onClick={onClick} data-testid='arrow-left-icon'><RevIcon.ArrowRight fill={fill} /></Icon>;
const Badge = ({ fill = '#2c2738', onClick }: IconProps) => <Icon onClick={onClick} data-testid='badge-icon'><RevIcon.Badge fill={fill} /></Icon>;
const Bag = ({ fill = '#2c2738', onClick }: IconProps) => <Icon onClick={onClick} data-testid='bag-icon'><RevIcon.Bag fill={fill} /></Icon>;
const Battery = ({ fill = '#2c2738', onClick }: IconProps) => <Icon onClick={onClick} data-testid='battery-icon'><RevIcon.Battery fill={fill} /></Icon>;
const Bell = ({ fill = '#2c2738', onClick }: IconProps) => <Icon onClick={onClick} data-testid='bell-icon'><RevIcon.Bell fill={fill} /></Icon>;
const Book = ({ fill = '#2c2738', onClick }: IconProps) => <Icon onClick={onClick} data-testid='book-icon'><RevIcon.Book fill={fill} /></Icon>;
const Box = ({ fill = '#2c2738', onClick }: IconProps) => <Icon onClick={onClick} data-testid='box-icon'><RevIcon.Box fill={fill} /></Icon>;
const Bullet = ({ fill = '#2c2738', onClick }: IconProps) => <Icon onClick={onClick} data-testid='bullet-icon'><RevIcon.Bullet fill={fill} /></Icon>;
const Calendar = ({ fill = '#2c2738', onClick }: IconProps) => <Icon onClick={onClick} data-testid='calendar-icon'><RevIcon.Calendar fill={fill} /></Icon>;
const Camera = ({ fill = '#2c2738', onClick }: IconProps) => <Icon onClick={onClick} data-testid='camera-icon'><RevIcon.Camera fill={fill} /></Icon>;
const Card = ({ fill = '#2c2738', onClick }: IconProps) => <Icon onClick={onClick} data-testid='card-icon'><RevIcon.Card fill={fill} /></Icon>;
const Cart = ({ fill = '#2c2738', onClick }: IconProps) => <Icon onClick={onClick} data-testid='cart-icon'><RevIcon.Cart fill={fill} /></Icon>;
const Check = ({ fill = '#2c2738', onClick }: IconProps) => <Icon onClick={onClick} data-testid='check-icon'><RevIcon.Check fill={fill} /></Icon>;
const ChevronRight = ({ fill = '#2c2738', onClick }: IconProps) => <Icon onClick={onClick} data-testid='chevron-right-icon'><RevIcon.ChevronRight fill={fill} /></Icon>;
const ChevronUp = ({ fill = '#2c2738', onClick }: IconProps) => <Icon onClick={onClick} data-testid='chevron-up-icon'><RevIcon.ChevronUp fill={fill} /></Icon>;
const Comment = ({ fill = '#2c2738', onClick }: IconProps) => <Icon onClick={onClick} data-testid='comment-icon'><RevIcon.Comment fill={fill} /></Icon>;
const Cookie = ({ fill = '#2c2738', onClick }: IconProps) => <Icon onClick={onClick} data-testid='cookie-icon'><RevIcon.Cookie fill={fill} /></Icon>;
const Currency = ({ fill = '#2c2738', onClick }: IconProps) => <Icon onClick={onClick} data-testid='currency-icon'><RevIcon.Currency fill={fill} /></Icon>;
const Desktop = ({ fill = '#2c2738', onClick }: IconProps) => <Icon onClick={onClick} data-testid='desktop-icon'><RevIcon.Desktop fill={fill} /></Icon>;
const Diamond = ({ fill = '#2c2738', onClick }: IconProps) => <Icon onClick={onClick} data-testid='diamond-icon'><RevIcon.Diamond fill={fill} /></Icon>;
const Download = ({ fill = '#2c2738', onClick }: IconProps) => <Icon onClick={onClick} data-testid='download-icon'><RevIcon.Download fill={fill} /></Icon>;
const Equalizer = ({ fill = '#2c2738', onClick }: IconProps) => <Icon onClick={onClick} data-testid='equalizer-icon'><RevIcon.Equalizer fill={fill} /></Icon>;
const File = ({ fill = '#2c2738', onClick }: IconProps) => <Icon onClick={onClick} data-testid='file-icon'><RevIcon.File fill={fill} /></Icon>;
const Flag = ({ fill = '#2c2738', onClick }: IconProps) => <Icon onClick={onClick} data-testid='flag-icon'><RevIcon.Flag fill={fill} /></Icon>;
const Folder = ({ fill = '#2c2738', onClick }: IconProps) => <Icon onClick={onClick} data-testid='folder-icon'><RevIcon.Folder fill={fill} /></Icon>;
const Gear = ({ fill = '#2c2738', onClick }: IconProps) => <Icon onClick={onClick} data-testid='gear-icon'><RevIcon.Gear fill={fill} /></Icon>;
const GraphBar = ({ fill = '#2c2738', onClick }: IconProps) => <Icon onClick={onClick} data-testid='graph-bar-icon'><RevIcon.GraphBar fill={fill} /></Icon>;
const GraphPie = ({ fill = '#2c2738', onClick }: IconProps) => <Icon onClick={onClick} data-testid='graph-pie-icon'><RevIcon.GraphPie fill={fill} /></Icon>;
const GraphPoly = ({ fill = '#2c2738', onClick }: IconProps) => <Icon onClick={onClick} data-testid='graph-poly-icon'><RevIcon.GraphPoly fill={fill} /></Icon>;
const Home = ({ fill = '#2c2738', onClick }: IconProps) => <Icon onClick={onClick} data-testid='home-icon'><RevIcon.Home fill={fill} /></Icon>;
const Image = ({ fill = '#2c2738', onClick }: IconProps) => <Icon onClick={onClick} data-testid='image-icon'><RevIcon.Image fill={fill} /></Icon>;
const Info = ({ fill = '#2c2738', onClick }: IconProps) => <Icon onClick={onClick} data-testid='info-icon'><RevIcon.Info fill={fill} /></Icon>;
const Layers = ({ fill = '#2c2738', onClick }: IconProps) => <Icon onClick={onClick} data-testid='layers-icon'><RevIcon.Layers fill={fill} /></Icon>;
const Marker = ({ fill = '#2c2738', onClick }: IconProps) => <Icon onClick={onClick} data-testid='marker-icon'><RevIcon.Marker fill={fill} /></Icon>;
const Mobile = ({ fill = '#2c2738', onClick }: IconProps) => <Icon onClick={onClick} data-testid='mobile-icon'><RevIcon.Mobile fill={fill} /></Icon>;
const PaperBag = ({ fill = '#2c2738', onClick }: IconProps) => <Icon onClick={onClick} data-testid='paper-bag-icon'><RevIcon.PaperBag fill={fill} /></Icon>;
const Pencil = ({ fill = '#2c2738', onClick }: IconProps) => <Icon onClick={onClick} data-testid='pencil-icon'><RevIcon.Pencil fill={fill} /></Icon>;
const Power = ({ fill = '#2c2738', onClick }: IconProps) => <Icon onClick={onClick} data-testid='power-icon'><RevIcon.Power fill={fill} /></Icon>;
const Shield = ({ fill = '#2c2738', onClick }: IconProps) => <Icon onClick={onClick} data-testid='shield-icon'><RevIcon.Shield fill={fill} /></Icon>;
const Square = ({ fill = '#2c2738', onClick }: IconProps) => <Icon onClick={onClick} data-testid='shield-icon'><RevIcon.Square fill={fill} /></Icon>;
const Tag = ({ fill = '#2c2738', onClick }: IconProps) => <Icon onClick={onClick} data-testid='tag-icon'><RevIcon.Tag fill={fill} /></Icon>;
const Thunder = ({ fill = '#2c2738', onClick }: IconProps) => <Icon onClick={onClick} data-testid='thunder-icon'><RevIcon.Thunder fill={fill} /></Icon>;
const Ticket = ({ fill = '#2c2738', onClick }: IconProps) => <Icon onClick={onClick} data-testid='ticket-icon'><RevIcon.Ticket fill={fill} /></Icon>;
const Upload = ({ fill = '#2c2738', onClick }: IconProps) => <Icon onClick={onClick} data-testid='upload-icon'><RevIcon.Upload fill={fill} /></Icon>;
const User = ({ fill = '#2c2738', onClick }: IconProps) => <Icon onClick={onClick} data-testid='user-icon'><RevIcon.User fill={fill} /></Icon>;
const VideoCamera = ({ fill = '#2c2738', onClick }: IconProps) => <Icon onClick={onClick} data-testid='vider-camera-icon'><RevIcon.VideoCamera fill={fill} /></Icon>;
const Wallet = ({ fill = '#2c2738', onClick }: IconProps) => <Icon onClick={onClick} data-testid='wallet-icon'><RevIcon.Wallet fill={fill} /></Icon>;
const Watch = ({ fill = '#2c2738', onClick }: IconProps) => <Icon onClick={onClick} data-testid='watch-icon'><RevIcon.Watch fill={fill} /></Icon>;
const Wrench = ({ fill = '#2c2738', onClick }: IconProps) => <Icon onClick={onClick} data-testid='wrench-icon'><RevIcon.Wrench fill={fill} /></Icon>;

export const Icons = Object.assign({}, {
	Burger,
	ChevronLeft,
	ChevronDown,
	Circle,
	Cross,
	Heart,
	Lens,
	Minus,
	More,
	Plus,
	Share,
	Activity,
	Alert,
	ArrowDown,
	ArrowUp,
	ArrowLeft,
	ArrowRight,
	Badge,
	Bag,
	Battery,
	Bell,
	Book,
	Box,
	Bullet,
	Calendar,
	Camera,
	Card,
	Cart,
	Check,
	ChevronRight,
	ChevronUp,
	Comment,
	Cookie,
	Currency,
	Desktop,
	Diamond,
	Download,
	Equalizer,
	File,
	Flag,
	Folder,
	Gear,
	GraphBar,
	GraphPie,
	GraphPoly,
	Home,
	Image,
	Info,
	Layers,
	Marker,
	Mobile,
	PaperBag,
	Pencil,
	Power,
	Shield,
	Square,
	Tag,
	Thunder,
	Ticket,
	Upload,
	User,
	VideoCamera,
	Wallet,
	Watch,
	Wrench
});