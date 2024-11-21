package ch.wiss.m223.wiss_quiz2024.dto;

import lombok.Getter;
import lombok.Setter;

@Setter @Getter
public class LoginRequest {

  private String username;
  private String password;

}
