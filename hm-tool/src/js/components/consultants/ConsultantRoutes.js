/**
 * Created by se90514 on 2017-06-12.
 */
import React from 'react';
import {Route, browserHistory,} from 'react-router';


import OverviewRender from  './consultant/overview/OverviewRender';
import OnOffBoard from  './consultant/OnOffBoard';
import PoDetails from  './consultant/PoDetails';
import Travel from  './consultant/Travel';
import Rr from  './consultant/Rr';
import {RfsRender} from  './../consultants/rfs/RfsRender';



export const overview = {

    path: '/consultant/overview',
    component: OverviewRender,
};

export const travel = {

    path: '/consultant/travel',
    component: Travel,
};
export const onOffBoard = {

    path: '/consultant/onOffBoard',
    component: OnOffBoard,
};
export const rfs = {

    path: '/consultant/rfs',
    component: RfsRender,
};
export const rr = {

    path: '/consultant/rr',
    component: Rr,
};
export const poDetails = {

    path: '/consultant/poDetails',
    component: PoDetails,
};


