// FILTERS
export interface Filter {
    searchBy: string;
    sort: {name: string, direction: string}[];
    maxPrice: number;
    minLikes: number;
    isFav: boolean;
    categories: CategoryView[];
}

export interface CategoryView {
    name: string;
    selected: boolean;
}

export interface FilterCockpitView {
    date: string;
    email: string;
    bookingId: number;
}

// DISHES
export interface DishView {
    dish: PlateView;
    image: {content: string};
    extras: ExtraView[];
    likes: number;
    isfav: boolean;
    categories?: {id: string}[];
}

export interface PlateView {
    id: number;
    name: string;
    description: string;
    price: number;
}

export interface ExtraView {
    id: number;
    name: string;
    price: number;
    selected?: boolean;
}

// BOOKING
export interface ReservationView {
    bookingDate: string;
    creationDate?: string;
    name: string;
    email: string;
    bookingId?: number;
    tableId?: number;
    bookingType: number;
    assistants: number;
    invitedGuests?: FriendsInvite[];
}

export interface FriendsInvite {
    email: string;
    acceptance: string;
}

export interface OrderView {
    dish: {
        idDish: number;
        name: string;
        price: number;
    };
    orderLine: {
        amount: number;
        comment: string;
    };
    extras: ExtraView[];
}

export interface OrderListView {
    bookingId: number;
    orderList: OrderView[];
    booking: OrderBookingView;
}

export interface OrderBookingView {
    name: string;
    bookingDate: string;
    creationDate: string;
    email: string;
    tableId: number;
}
