import express from "express";

interface RegistrationRequest extends express.Request {
  body: {
    email: string
    password: string
  }
}

interface LoginRequest extends RegistrationRequest {
}

export type {RegistrationRequest, LoginRequest}