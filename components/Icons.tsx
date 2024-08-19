import Entypo from "@expo/vector-icons/Entypo";
import Feather from '@expo/vector-icons/Feather';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import Ionicons from '@expo/vector-icons/Ionicons';
import Color from "@/constants/Color";
import AntDesign from '@expo/vector-icons/AntDesign';

export const HomeIcon = (props: any) => (
    <Entypo name="home" size={30} color="white"  {...props} />
)

export const CompassIcon = (props: any) => (
    <Feather name="compass" size={28} color="black"  {...props} />
)

export const DasboardIcon = (props: any) => (
    <MaterialIcons name="dashboard" size={28} color="black" {...props} />
)

export const SearchIcon = (props: any) => (
    <FontAwesome name="search" size={25} color="black" {...props} />
)

export const BookMarkIcon = (props: any) => (
    <Ionicons name="bookmark" size={24} color="black" {...props} />
)

export const ProfileIcon = (props: any) => (
    <FontAwesome5 name="user-alt" size={28} color="black" {...props} />
)

export const NotificationIcon = (props: any) => (
    <Ionicons name="notifications" size={20} color={Color.black} {...props} />
)

export const OptionIcon = (props: any) => (
    <Ionicons name="options" size={24} color="black" {...props} />
)

export const MapIcon = (props: any) => (
    <FontAwesome name="map-marker" size={24} color="black" {...props} />
)


export const StarIcon = (props: any) => (
    <FontAwesome name="star" size={24} color="black" {...props} />
)

export const ArroeLeftIcon = (props: any) => (
    <FontAwesome name="arrow-left" size={24} color="black" {...props} />
)

export const GroupPersonIcon = (props: any) => (
    <FontAwesome name="group" size={24} color="black" {...props} />
)

export const ClockIcon = (props: any) => (
    <AntDesign name="clockcircle" size={24} color="black" {...props} />
)