import express from "express";

export function mw(req, res, next) {
    next();
}
