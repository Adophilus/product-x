package main

import (
	"net/http"
	"testing"

	"github.com/steinfletcher/apitest"
)

func TestGetTracks (t *testing.T) {
  handler := func (w http.ResponseWriter, r *http.Request) {
    msg := `{}`
    w.Write([]byte(msg))
    w.WriteHeader(http.StatusOK)
  }

  apitest.New()
    .HandlerFunc(handler)
    .
}
