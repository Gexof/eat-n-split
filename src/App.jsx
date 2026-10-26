import { useState } from "react";
import Button from "./components/Button";
import FormAddFriend from "./components/FormAddFriend";
import FormSplitBill from "./components/FormSplitBill";
import FriendsList from "./components/FriendsList";

function App() {
  const [showAddFriend, setShowAddFriend] = useState(false);
  const [friends, setFriends] = useState([]);
  const [selectedFriend, setSelectedFriend] = useState(null);

  // Handlers
  const handleShowAddFriend = () => {
    setShowAddFriend((prev) => !prev);
  };

  const handleAddFriend = (friend) => {
    setFriends((prev) => [...prev, friend]);
    setShowAddFriend(false);
  };

  const handleSelectedFriend = (friend) => {
    setSelectedFriend((prev) => (prev?.id === friend.id ? null : friend));

    setShowAddFriend(false);
  };

  const handleSplitBill = (value) => {
    setFriends((prev) =>
      prev.map((friend) =>
        friend.id === selectedFriend.id
          ? { ...friend, balance: friend.balance + value }
          : friend,
      ),
    );

    setSelectedFriend(null);
  };

  return (
    <main className="relative isolate min-h-screen overflow-hidden bg-[#f7f8f5] px-4 py-10 text-stone-800 sm:px-6 lg:py-16">
      {/* Ambient Background */}
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -left-40 -top-32 h-120 w-120 rounded-full bg-emerald-200/30 blur-[100px]" />
        <div className="absolute -right-40 top-[20%] h-112 w-md rounded-full bg-lime-200/20 blur-[110px]" />
        <div className="absolute -bottom-48 left-[30%] h-120 w-120 rounded-full bg-amber-100/40 blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-5xl">
        {/* Header */}
        <header className="mb-10 text-center">
          <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-600 text-2xl text-white shadow-lg shadow-emerald-600/20">
            🍽️
          </div>

          <h1 className="text-3xl font-black tracking-tight text-stone-900 sm:text-4xl">
            Eat <span className="text-emerald-600">&</span> Split
          </h1>

          <p className="mt-3 text-sm leading-6 text-stone-500 sm:text-base">
            Good food is better when you split it fairly.
          </p>
        </header>

        {/* Main Content */}
        {friends.length === 0 ? (
          <section className="relative mx-auto w-full max-w-3xl overflow-hidden rounded-3xl border border-white/80 bg-white/85 shadow-[0_20px_70px_-35px_rgba(41,70,50,0.22)] backdrop-blur-xl">
            {/* Card Decoration */}
            <div className="pointer-events-none absolute -right-16 -top-20 h-64 w-64 rounded-full bg-emerald-100/70 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-24 -left-16 h-56 w-56 rounded-full bg-amber-100/60 blur-3xl" />

            <div className="relative px-6 py-12 text-center sm:px-12 sm:py-16">
              <div className="relative mx-auto mb-8 flex h-24 w-24 items-center justify-center rounded-4xl border border-emerald-100 bg-linear-to-br from-emerald-50 to-emerald-100/70 shadow-sm">
                <span className="text-5xl">🍽️</span>

                <span className="absolute -right-2 -top-2 flex h-9 w-9 items-center justify-center rounded-xl border-4 border-white bg-emerald-600 text-lg text-white shadow-sm">
                  +
                </span>
              </div>

              <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-emerald-700">
                Your table is waiting
              </p>

              <h2 className="mx-auto max-w-lg text-3xl font-black leading-tight tracking-tight text-stone-900 sm:text-4xl">
                Good times are better
                <span className="block text-emerald-600">when shared.</span>
              </h2>

              <p className="mx-auto mt-4 max-w-md text-sm leading-7 text-stone-500 sm:text-base">
                Add your friends, split the bills, and keep everyone's balance
                in check. No awkward math, just good times.
              </p>

              <div className="mt-8 flex justify-center">
                <Button onClick={handleShowAddFriend}>
                  <span className="mr-2 text-lg leading-none">+</span>
                  Add Your First Friend
                </Button>
              </div>

              {showAddFriend && (
                <div className="mx-auto mt-6 w-full max-w-md text-left">
                  <FormAddFriend onAddFriedns={handleAddFriend} />
                </div>
              )}

              {/* How It Works */}
              <div className="mx-auto mt-12 grid max-w-xl gap-4 border-t border-stone-100 pt-8 text-left sm:grid-cols-3 sm:gap-6">
                <div className="flex items-start gap-3 sm:flex-col">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-stone-100 text-sm font-bold text-stone-700">
                    01
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-stone-800">
                      Add friends
                    </h3>
                    <p className="mt-1 text-xs leading-5 text-stone-500">
                      Build your little group.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 sm:flex-col">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-stone-100 text-sm font-bold text-stone-700">
                    02
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-stone-800">
                      Split bills
                    </h3>
                    <p className="mt-1 text-xs leading-5 text-stone-500">
                      Share expenses fairly.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 sm:flex-col">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-stone-100 text-sm font-bold text-stone-700">
                    03
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-stone-800">
                      Settle up
                    </h3>
                    <p className="mt-1 text-xs leading-5 text-stone-500">
                      Know who owes whom.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        ) : (
          <div className="grid items-start gap-6 md:grid-cols-2 md:gap-8">
            {/* Friends Sidebar */}
            <section className="rounded-3xl border border-white/80 bg-white/90 p-5 shadow-[0_16px_50px_-30px_rgba(41,70,50,0.22)] backdrop-blur-xl sm:p-6">
              <div className="mb-5 flex items-center justify-between gap-3">
                <div>
                  <h2 className="text-lg font-bold text-stone-900">
                    Your Friends
                  </h2>
                  <p className="mt-1 text-sm text-stone-500">
                    Keep track of your shared bills.
                  </p>
                </div>

                <span className="flex h-9 min-w-9 items-center justify-center rounded-xl bg-emerald-50 px-2 text-sm font-bold text-emerald-700">
                  {friends.length}
                </span>
              </div>

              <FriendsList
                friends={friends}
                onSelection={handleSelectedFriend}
                selectedFriend={selectedFriend}
              />

              {showAddFriend && (
                <div className="mt-5">
                  <FormAddFriend onAddFriedns={handleAddFriend} />
                </div>
              )}

              <div className="mt-5">
                <Button onClick={handleShowAddFriend}>
                  {showAddFriend ? "Close" : "Add Friend"}
                </Button>
              </div>
            </section>

            {/* Split Bill */}
            <section>
              {selectedFriend && (
                <FormSplitBill
                  selectedFriend={selectedFriend}
                  onSplitBill={handleSplitBill}
                />
              )}
            </section>
          </div>
        )}

        {/* Footer */}
        <footer className="mt-10 text-center text-xs text-stone-400">
          Made for good times and fair splits.
        </footer>
      </div>
    </main>
  );
}

export default App;
